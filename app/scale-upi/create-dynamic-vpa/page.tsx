import { DocLayout } from "@/components/doc-layout"

export default function CreateDynamicVpaPage() {
  return (
    <DocLayout title="Create Dynamic VPA">
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Use this API to create a dynamic UPI VPA which can be further converted into QR or UPI intent. You can use
          this product for collecting payments offline or online from your customers.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm">
            <strong>Flow:</strong> Create a dynamic VPA → convert it into a QR for offline collection, use it as a link
            for online collection → receive webhook from Ztake about the collection status.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Request</h2>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm">
            <strong>API URL:</strong> https://api.ztake.in/client/createDynamicVpa
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
  "reference_id": "test0007", //should be an unique reference ID
  "amount": 1
  // "merchantId": "ZTSUBVA0013" //pass this param only for Sub Merchant Model
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
    "transcation_id": "ZTOD24242",
    "amount": 1,
    "reference_id": "test0007",
    "upi": "upi://pay?pa=2498294829424@yesbank&pn=Ztake&am=1&cu=INR&tn=",
    "status": "SUCCESS"
  },
  "message": ""
}`}</code>
          </pre>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm font-semibold mb-2">Note:</p>
          <p className="text-sm">Set up Webhook from Ztake Web App - Settings → Developer Controls → Webhook → UPI.</p>
        </div>
      </div>
    </DocLayout>
  )
}
