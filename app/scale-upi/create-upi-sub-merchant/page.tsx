import { DocLayout } from "@/components/doc-layout"

export default function CreateUpiSubMerchantPage() {
  return (
    <DocLayout title="Create UPI Sub Merchant">
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Use this API to create a UPI sub-merchant account for managing separate payment collections under your main
          merchant account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Request</h2>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm">
            <strong>API URL:</strong> https://api.ztake.in/client/createUpiSubMerchant
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
  "merchant_name": "Sub Merchant Store",
  "merchant_email": "[email protected]",
  "merchant_phone": "9876543210",
  "business_type": "RETAIL",
  "reference_id": "submerch001"
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
    "merchant_id": "ZTSUBVA0013",
    "merchant_name": "Sub Merchant Store",
    "reference_id": "submerch001",
    "status": "ACTIVE",
    "createdAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Sub merchant created successfully"
}`}</code>
          </pre>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-sm">
            <strong>Use Case:</strong> Sub-merchants are useful for marketplace platforms where multiple sellers need
            separate payment collection accounts.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
