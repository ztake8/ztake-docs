import { DocLayout } from "@/components/doc-layout"

export default function UpiCollectPage() {
  return (
    <DocLayout title="UPI Collect">
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Use this API to make a payment collection request to the payer's UPI App. The payer (VPA holder) will receive
          a notification on their UPI App for making payment.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm">
            <strong>Flow:</strong> Create a Collect request → user will receive a notification → user makes a payment →
            you will receive a callback from Ztake about the collection status.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Request</h2>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm">
            <strong>API URL:</strong> https://api.ztake.in/client/createCollectionRequest
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
  "reference_id": "test000334222",
  "amount": 6,
  "device": "ANDROID",
  "upi": "test@ybl"
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
    "partnerRef": "test000334222",
    "referance": "ZTCA001",
    "upi": "test@ybl",
    "status": "PENDING"
  },
  "message": "Collect request sent to UPI App"
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Webhook Response</h2>
        <p className="text-muted-foreground mb-4">
          You will receive a webhook response after the money collected successfully or failed due to various reason.
        </p>
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`{
  "status": true,
  "statusCode": 200,
  "data": {
    "transaction_id": "ZTTR003350149",
    "reference_id": "test-1725963921",
    "order_id": "ZTCA0927983242",
    "account_number": "328478343453535",
    "ifsc": "HDFC0000005",
    "upi": "test@ybl",
    "amount": 1,
    "payment_mode": "UPI",
    "payment_remark": "",
    "statusDescription": "Collected Successfully",
    "status": "SUCCESS",
    "utr": "425415924630",
    "holderName": "Name of the Bank Account Holder",
    "type": "Credit",
    "charge": 0.02,
    "gst": 0,
    "createdAt": "2024-09-10T10:26:48.286Z",
    "updatedAt": "2024-09-10T10:26:48.321Z"
  },
  "message": "",
  "event": "UPI_COLLECT"
}`}</code>
          </pre>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm font-semibold mb-2">Setup Webhook:</p>
          <p className="text-sm">Set up Webhook from Ztake Web App → Settings → Developer Controls → Webhook → UPI.</p>
        </div>
      </div>
    </DocLayout>
  )
}
