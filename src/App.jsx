import Gallery from './components/Gallery';

/**
 * App Component
 * Serves as the main container for the Photo Gallery application.
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default App;
