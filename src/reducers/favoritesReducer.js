// Key used to store favourites in browser localStorage
export const FAVORITES_STORAGE_KEY = 'photo_gallery_favorites';

/**
 * Reads initial favourites from localStorage.
 * Returns an array of favourite photo IDs.
 */
export function initFavorites() {
  try {
    const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  } catch (error) {
    console.error('Failed to retrieve favorites from localStorage:', error);
    return [];
  }
}

/**
 * Reducer function to handle favourite actions.
 * State is an array of favourite photo IDs.
 */
export function favoritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const photoId = action.payload;
      const isAlreadyFavorite = state.includes(photoId);

      // If already a favourite, remove it; otherwise, add it
      const updatedFavorites = isAlreadyFavorite
        ? state.filter((id) => id !== photoId)
        : [...state, photoId];

      // Persist the updated array to localStorage
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavorites));
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error);
      }

      return updatedFavorites;
    }

    default:
      return state;
  }
}
