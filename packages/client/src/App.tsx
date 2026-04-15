import { useState, useEffect } from 'react';

function App() {
  const [serverStatus, setServerStatus] = useState<string>('loading...');

  useEffect(() => {
    fetch('/api/version')
      .then((res) => res.json())
      .then((data) => setServerStatus(`Server running - v${data.version}`))
      .catch(() => setServerStatus('Server unavailable'));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4 text-green-800">La Base</h1>
        <p className="text-gray-600 text-center mb-8">Multiplayer Card Game</p>

        <div className="bg-gray-100 rounded-lg p-4 mb-8">
          <p className="text-center text-gray-700">
            <span className="font-semibold">Status:</span> {serverStatus}
          </p>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition">
            New Game
          </button>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
            Join Game
          </button>
          <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition">
            Rankings
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-8">v0.1.0 - Phase 1</p>
      </div>
    </div>
  );
}

export default App;
