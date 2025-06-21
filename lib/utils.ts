import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sanitizeUnsupportedColors(rootElement: HTMLElement) {
  const allElements = rootElement.querySelectorAll<HTMLElement>('*')

  allElements.forEach((el) => {
    const style = getComputedStyle(el)

    // Replace unsupported background color
    if (style.backgroundColor.includes('oklch')) {
      el.style.backgroundColor = '#ffffff'
    }

    // Replace unsupported text color
    if (style.color.includes('oklch')) {
      el.style.color = '#000000'
    }

    // You can also clear any unsupported border colors if needed
    if (style.borderColor.includes('oklch')) {
      el.style.borderColor = '#000000'
    }
  })
}
