import { DocLayout } from "@/components/doc-layout"

export default function GenerateQrLiveDemoPage() {
  return (
    <DocLayout title="Generate QR for Live Demo">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">UPI QR Code</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">UPI ID:</label>
                <input type="text" placeholder="Enter UPI ID" className="w-full px-3 py-2 border rounded-md" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Amount:</label>
                <input type="number" placeholder="Enter amount" className="w-full px-3 py-2 border rounded-md" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Note:</label>
                <input type="text" placeholder="Enter note (optional)" className="w-full px-3 py-2 border rounded-md" />
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Generate UPI QR Code
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Plain Text QR Code</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Text:</label>
                <textarea placeholder="Enter text to encode" rows={6} className="w-full px-3 py-2 border rounded-md" />
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Generate Plain Text QR Code
              </button>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
          <p className="text-sm">
            <strong>Note:</strong> This is a demo tool for generating QR codes. Use the API endpoints to integrate QR
            code generation into your application.
          </p>
        </div>
      </div>
    </DocLayout>
  )
}
