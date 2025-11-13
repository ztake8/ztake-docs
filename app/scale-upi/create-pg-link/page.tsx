import { DocLayout } from "@/components/doc-layout"

export default function CreatePgLinkPage() {
  return (
    <DocLayout title="Create PG Link">
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Use this API to create a payment gateway link for collecting payments from customers. The link can be shared
          via email, SMS, or any other channel.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Request</h2>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm">
            <strong>API URL:</strong> https://api.ztake.in/client/createPgLink
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
  "reference_id": "link001",
  "amount": 100,
  "customer_name": "David Peter",
  "customer_email": "[email protected]",
  "customer_phone": "9876543210",
  "description": "Payment for Order #123"
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
    "link_id": "ZTLINK001",
    "reference_id": "link001",
    "payment_link": "https://pay.ztake.in/pg/ZTLINK001",
    "amount": 100,
    "status": "ACTIVE"
  },
  "message": "Payment link created successfully"
}`}</code>
          </pre>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-sm">
            <strong>Note:</strong> The payment link will remain active until the payment is completed or the link
            expires.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
