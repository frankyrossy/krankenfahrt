// components/layout.js
export default function layout({ children }) {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-800">Krankenfahrt</h1>
              <div className="space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Dashboard
                </button>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Hauptinhalt */}
        <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
      </div>
    )
  }