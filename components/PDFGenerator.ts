// utils/PDFGenerator.ts
import { sanitizeUnsupportedColors } from '@/lib/utils'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export function patchRootCSSVariables() {
  const root = document.documentElement
  const computedStyles = getComputedStyle(root)

  for (const key of computedStyles) {
    const value = computedStyles.getPropertyValue(key)
    if (value.includes('oklch')) {
      root.style.setProperty(key, '#ffffff') // or a safe fallback
    }
  }
}

export interface PDFOptions {
  filename?: string
  quality?: number
  format?: 'a4' | 'letter'
  orientation?: 'portrait' | 'landscape'
}

export class PDFGenerator {
  private static defaultOptions: PDFOptions = {
    filename: 'receipt.pdf',
    quality: 0.98,
    format: 'a4',
    orientation: 'portrait',
  }

  static async generateFromElement(
    element: HTMLElement,
    options: PDFOptions = {}
  ): Promise<Blob> {
    patchRootCSSVariables() // patch :root variables like --background
    sanitizeUnsupportedColors(element)
    const opts = { ...this.defaultOptions, ...options }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
    })

    const imgWidth = 210 // A4 width in mm
    const pageHeight = 295
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight
    let position = 0

    const pdf = new jsPDF({
      orientation: opts.orientation!,
      unit: 'mm',
      format: opts.format!,
    })

    const imgData = canvas.toDataURL('image/jpeg', opts.quality)
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    return pdf.output('blob')
  }

  static async downloadPDF(
    element: HTMLElement,
    options: PDFOptions = {}
  ): Promise<void> {
    patchRootCSSVariables() // patch :root variables like --background
    sanitizeUnsupportedColors(element)
    const blob = await this.generateFromElement(element, options)
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = options.filename || 'receipt.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  static async sharePDF(
    element: HTMLElement,
    shareData: { title?: string; text?: string } = {},
    options: PDFOptions = {}
  ): Promise<void> {
    const blob = await this.generateFromElement(element, options)
    const file = new File([blob], options.filename || 'receipt.pdf', {
      type: 'application/pdf',
    })

    if (navigator.share && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: shareData.title,
        text: shareData.text,
        files: [file],
      })
    } else {
      await this.downloadPDF(element, options)
    }
  }
}
