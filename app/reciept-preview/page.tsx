// app/receipt-preview/page.tsx
'use client'

import React, { useRef, useState } from 'react'
import TransactionReceipt from '@/components/TransactionReceipt'
import { Button } from '@/components/ui/button'
import { PDFGenerator } from '@/components/PDFGenerator'

const ReceiptPreview = () => {
  const receiptRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)

  const mockData = {
    date: '16 Apr 2025',
    time: '08:00pm',
    amount: 404.05,
    status: 'Success',
    sender: 'Declan Kashimawo Rice',
    receiver: 'Thibaut Courtois',
    accountNumber: '1234323457',
    bank: 'Santiago Bernabéu Stadium',
    description: '90 minutes at the Bernabéu is a looong time 🤡',
    reference:
      'NIBSS Instant Payment Outward 000013250421105914000108 591010 To Zenith Bank/Oluwatobi Sodiq Amusa',
  }

  const handleDownload = async () => {
    if (!receiptRef.current) return
    setLoading(true)
    await PDFGenerator.downloadPDF(receiptRef.current, {
      filename: 'transaction_receipt.pdf',
    })
    setLoading(false)
  }

  const handleShare = async () => {
    if (!receiptRef.current) return
    setLoading(true)
    await PDFGenerator.sharePDF(receiptRef.current, {
      title: 'Transaction Receipt',
      text: 'Here is your transaction receipt',
    })
    setLoading(false)
  }

  return (
    <div className="p-8">
      <div className="mb-4">
        <Button onClick={handleDownload} disabled={loading} className="mr-2">
          {loading ? 'Generating...' : 'Download PDF'}
        </Button>
        <Button onClick={handleShare} disabled={loading}>
          {loading ? 'Generating...' : 'Share PDF'}
        </Button>
      </div>
      <div className="hidden">
        <TransactionReceipt ref={receiptRef} data={mockData} />
      </div>
    </div>
  )
}

export default ReceiptPreview
