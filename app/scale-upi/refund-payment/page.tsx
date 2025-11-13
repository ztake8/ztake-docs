import { DocLayout } from "@/components/doc-layout"

export default function RefundPaymentPage() {
  return (
    <DocLayout title="Refund Payment">
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Use this API to initiate a refund for a successful payment transaction. Refunds are processed back to the
          customer's original payment method.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Request</h2>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm">
            <strong>API URL:</strong> https://api.ztake.in/client/refundPayment
          </p>
          <p className="font-mono text-sm mt-2">
            <strong>Method:</strong> POST
          </p>
          <p className="text-sm mt-2">
            <strong>Auth:</strong> Please refer to the Authorization page.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Body</h3>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`{
  "transaction_id": "ZTTR003350149", //Ztake transaction ID
  "amount": 100, //refund amount (partial or full)
  "reason": "Customer requested refund",
  "reference_id": "refund001" //unique refund reference
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Response</h2>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`{
  "status": true,
  "statusCode": 200,
  "data": {
    "refund_id": "ZTRF001",
    "transaction_id": "ZTTR003350149",
    "reference_id": "refund001",
    "amount": 100,
    "status": "PENDING",
    "reason": "Customer requested refund"
  },
  "message": "Refund initiated successfully"
}`}</code>
          </pre>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm font-semibold mb-2">Processing Time:</p>
          <p className="text-sm">
            Refunds are typically processed within 5-7 business days depending on the customer's bank.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-sm">
            <strong>Note:</strong> You can only refund up to the original transaction amount. Partial refunds are
            supported.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
