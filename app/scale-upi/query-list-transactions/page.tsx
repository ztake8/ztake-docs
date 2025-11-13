import { DocLayout } from "@/components/doc-layout"

export default function QueryListTransactionsPage() {
  return (
    <DocLayout title="Query and List Transactions">
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          Use this API to query and list all UPI collection transactions with filtering options.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Request</h2>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-mono text-sm">
            <strong>API URL:</strong> https://api.ztake.in/client/queryTransactions
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
  "from_date": "2024-01-01",
  "to_date": "2024-12-31",
  "status": "SUCCESS", //optional: SUCCESS, FAILED, PENDING
  "reference_id": "test001", //optional
  "page": 1,
  "limit": 50
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
    "transactions": [
      {
        "transaction_id": "ZTTR003350149",
        "reference_id": "test-1725963921",
        "amount": 100,
        "upi": "test@ybl",
        "status": "SUCCESS",
        "utr": "425415924630",
        "createdAt": "2024-09-10T10:26:48.286Z"
      }
    ],
    "total": 150,
    "page": 1,
    "limit": 50
  },
  "message": "Transactions fetched successfully"
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Query Parameters</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-4 py-2 text-left">Parameter</th>
                <th className="border px-4 py-2 text-left">Type</th>
                <th className="border px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">from_date</td>
                <td className="border px-4 py-2">String</td>
                <td className="border px-4 py-2">Start date for filtering (YYYY-MM-DD)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">to_date</td>
                <td className="border px-4 py-2">String</td>
                <td className="border px-4 py-2">End date for filtering (YYYY-MM-DD)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">status</td>
                <td className="border px-4 py-2">String</td>
                <td className="border px-4 py-2">Filter by status (optional)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">reference_id</td>
                <td className="border px-4 py-2">String</td>
                <td className="border px-4 py-2">Filter by reference ID (optional)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">page</td>
                <td className="border px-4 py-2">Number</td>
                <td className="border px-4 py-2">Page number for pagination</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-mono text-sm">limit</td>
                <td className="border px-4 py-2">Number</td>
                <td className="border px-4 py-2">Number of records per page</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DocLayout>
  )
}
