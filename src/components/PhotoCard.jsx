/**
 * PhotoCard Component
 * Displays an individual photo with author name and a favourite toggle button.
 *
 * Props:
 * - photo: The photo object from Picsum API ({ id, author, download_url, ... })
 * - isFavorite: Boolean indicating if this photo is favourited
 * - onToggleFavorite: Callback function to toggle favourite status
 */
function PhotoCard({ photo, isFavorite, onToggleFavorite }) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Photo Image */}
      <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Footer: Author Name & Favorite Button */}
      <div className="p-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Author</p>
          <h3 className="text-sm font-semibold text-gray-800 truncate" title={photo.author}>
            {photo.author}
          </h3>
        </div>

        {/* Heart Icon Button */}
        <button
          type="button"
          onClick={() => onToggleFavorite(photo.id)}
          aria-label={isFavorite ? `Remove photo by ${photo.author} from favourites` : `Add photo by ${photo.author} to favourites`}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          {isFavorite ? (
            /* Filled Red Heart Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-red-500"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          ) : (
            /* Outline Heart Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
