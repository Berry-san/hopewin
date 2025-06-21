// components/TransactionReceipt.tsx
import React from 'react'

interface ReceiptProps {
  data: {
    date: string
    time: string
    amount: number
    status: string
    sender: string
    receiver: string
    accountNumber: string
    bank: string
    description: string
    reference: string
  }
}

const TransactionReceipt = React.forwardRef<HTMLDivElement, ReceiptProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        style={{ padding: '20px', maxWidth: 600, backgroundColor: '#fff' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <div>
            <h2 style={{ margin: 0 }}>Transaction Receipt</h2>
            <p style={{ fontSize: 12, color: '#888' }}>
              {data.date} - {data.time}
            </p>
          </div>
          <img
            src="/ethica_logo.png"
            alt="Ethica Logo"
            width={80}
            height={80}
          />
        </div>
        <p>
          <strong>Transaction amount:</strong>
        </p>
        <h2 style={{ color: 'green' }}>
          ₦{data.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </h2>
        <p style={{ color: 'green' }}>Transaction status: {data.status}</p>
        <br />
        <p>
          <strong>Sender:</strong> {data.sender}
        </p>
        <p>
          <strong>Receiver:</strong> {data.receiver}
        </p>
        <p>
          <strong>Account number:</strong> {data.accountNumber}
        </p>
        <p>
          <strong>Receiving bank:</strong> {data.bank}
        </p>
        <p>
          <strong>Description:</strong> {data.description}
        </p>
        <p>
          <strong>Reference number:</strong> {data.reference}
        </p>
      </div>
    )
  }
)

TransactionReceipt.displayName = 'TransactionReceipt'
export default TransactionReceipt
