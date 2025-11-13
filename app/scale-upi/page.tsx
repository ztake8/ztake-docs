import { DocLayout } from "@/components/doc-layout"

export default function ScaleUpiPage() {
  return (
    <DocLayout title="PG Collection (Scale UPI)">
      <div className="prose max-w-none">
        <p className="text-lg text-muted-foreground">
          PG Collections is a Payment Collection product with multiple banks and payment aggregators in the backend
          enabling Ztake Users to scale their payment collection.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>

        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              1
            </div>
            <div>
              <p className="font-medium">Create a static or dynamic VPA</p>
              <p className="text-sm text-muted-foreground">
                Please refer to Static VPA Creation and Dynamic VPA Creation.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              2
            </div>
            <div>
              <p className="font-medium">Use the UPI string in your app</p>
              <p className="text-sm text-muted-foreground">Collect payment from the end-user using the UPI string.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              3
            </div>
            <div>
              <p className="font-medium">Receive callback</p>
              <p className="text-sm text-muted-foreground">
                Get callback with the status of the UPI Collection - refer to callback setup and sample.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              4
            </div>
            <div>
              <p className="font-medium">Query transactions</p>
              <p className="text-sm text-muted-foreground">
                Retrieve/query/list the statuses using Query Transaction API.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              5
            </div>
            <div>
              <p className="font-medium">Settlement</p>
              <p className="text-sm text-muted-foreground">
                Get the collected monies settled to your company bank account.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-3">Edge Case Handling</h3>

          <div className="space-y-4">
            <div>
              <p className="font-medium text-sm mb-1">Q: Can there be multiple entries for the same reference_id?</p>
              <p className="text-sm text-muted-foreground">
                A: Yes, for a given reference_id (the ID you used to create the payment request), there can be multiple
                entries. These entries could represent multiple successful, failed, or pending transactions. To handle
                this, always use the transaction_id, which is unique for each payment entry, to track individual
                transactions accurately.
              </p>
            </div>

            <div>
              <p className="font-medium text-sm mb-1">
                Q: Is it possible for two payment attempts to be successful for a single reference_id?
              </p>
              <p className="text-sm text-muted-foreground">
                A: Yes, two successful payments are possible but only up to the amount specified in the payment request.
                The system will accept payments only up to the requested amount. Any amount exceeding this limit will
                not be allowed, preventing overpayment by the user.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
          <p className="text-sm">
            Please feel free to write us at{" "}
            <a href="mailto:[email protected]" className="text-blue-600 hover:underline">
              [email protected]
            </a>{" "}
            for any queries.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
