import { useState, useReducer, useCallback, useMemo } from 'react';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { favoritesReducer, initFavorites } from '../reducers/favoritesReducer';
import PhotoCard from './PhotoCard';

/**
 * Gallery Component
 * Manages photo fetching, real-time search filtering, and favourite toggling.
 */
function Gallery() {
  // 1. Fetch photos using custom hook
  const { photos, loading, error } = useFetchPhotos();

  // 2. Manage favourite photo IDs using useReducer
  const [favorites, dispatch] = useReducer(favoritesReducer, [], initFavorites);

  // 3. Search query state
  const [searchQuery, setSearchQuery] = useState('');

  // 4. useCallback: Memoizes search input change handler so it isn't recreated on each render
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  // 5. useMemo: Recalculates filtered photos only when photos or searchQuery changes
  const filteredPhotos = useMemo(() => {
    const trimmedQuery = searchQuery.trim().toLowerCase();

    // If search is empty, return all fetched photos
    if (!trimmedQuery) {
      return photos;
    }

    // Filter photos case-insensitively by author name
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(trimmedQuery)
    );
  }, [photos, searchQuery]);

  // Handler to toggle favourites via reducer dispatch
  const handleToggleFavorite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Photo Gallery
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Discover photos from Picsum and save your favourites
        </p>
      </header>

      {/* Search Input Filter */}
      <div className="max-w-md mx-auto mb-10">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search photos by author name..."
            aria-label="Search photos by author name"
            className="w-full px-4 py-3 pl-11 text-sm bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          {/* Search Magnifying Glass Icon */}
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading photos...</p>
        </div>
      )}

      {/* Error Message */}
      {!loading && error && (
        <div className="max-w-lg mx-auto bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <svg
            className="w-10 h-10 text-red-500 mx-auto mb-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-red-800">Unable to load photos</h2>
          <p className="mt-1 text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* No Search Results Message */}
      {!loading && !error && filteredPhotos.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100 p-8 max-w-md mx-auto">
          <svg
            className="w-12 h-12 text-gray-400 mx-auto mb-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <h3 className="text-base font-semibold text-gray-800">No photos found</h3>
          <p className="mt-1 text-sm text-gray-500">
            No authors match &ldquo;{searchQuery}&rdquo;. Try typing another author name.
          </p>
        </div>
      )}

      {/* Responsive Photo Grid (Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols) */}
      {!loading && !error && filteredPhotos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favorites.includes(photo.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
