
# 📸 Celebrare Photo Gallery

A responsive Photo Gallery Web App built with **React, Vite, and Tailwind CSS** as part of the Celebrare Frontend Developer Internship Pre-Screening Assignment.

The application fetches photos from the Picsum Photos API, allows users to search photos by author name, and provides a favourites feature with persistent storage.

## ✨ Features

- **Photo Gallery:** Fetches and displays 30 photos from the Picsum Photos API.
- **Responsive Design:** Adapts to mobile, tablet, and desktop screens.
- **Real-Time Search:** Filters photos by author name without making additional API requests.
- **Favourites:** Add or remove photos from favourites using a heart button.
- **Persistent Storage:** Saves favourites in browser localStorage, so they remain available after refreshing.
- **Loading State:** Displays a loading spinner while fetching photos.
- **Error Handling:** Shows an error message if the API request fails.
- **Empty Search State:** Displays a message when no photos match the search query.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| Tailwind CSS | Responsive styling |
| Picsum Photos API | Fetching photo data |
| React Hooks | State management and component logic |
| localStorage | Persistent favourites storage |

## 🧠 React Concepts Used

This project demonstrates the practical use of React hooks and component-based development.

### 1. Custom Hook — `useFetchPhotos`

A custom hook that handles fetching photos from the API.

It returns:

- `photos` — fetched photo data.
- `loading` — indicates whether the request is in progress.
- `error` — stores an error message if fetching fails.

### 2. useReducer

The `useReducer` hook manages the favourites list.

The reducer handles the following action:

- `TOGGLE_FAVORITE` — adds a photo to favourites or removes it if it already exists.

### 3. localStorage

Favourites are stored in the browser's localStorage and restored when the application loads.

### 4. useCallback

Used to memoize the search handler function.

### 5. useMemo

Used to calculate the filtered photo list based on the fetched photos and the current search query.

## 📂 Project Structure

```text
celebrare-photo-gallery/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Gallery.jsx
│   │   └── PhotoCard.jsx
│   │
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   │
│   ├── reducers/
│   │   └── favoritesReducer.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/celebrare-photo-gallery.git
```

### 2. Navigate to the Project

```bash
cd celebrare-photo-gallery
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 🌐 API Reference

This project uses the free Picsum Photos API.

**Endpoint:**

```text
https://picsum.photos/v2/list?limit=30
```

The API provides photo information including:

- `id`
- `author`
- `download_url`

The application uses the photo ID to identify favourites and the author name to filter search results.

## 📱 Responsive Layout

The gallery uses a responsive grid layout implemented with Tailwind CSS.

| Screen Size | Columns |
| ----------- | ------: |
| Mobile      |       1 |
| Tablet      |       2 |
| Desktop     |       4 |

## 🎯 Assignment Objective

The objective of this project is to demonstrate fundamental React development skills, including:

- Fetching data from a public API.
- Managing state with React hooks.
- Implementing real-time filtering.
- Using `useReducer` for state management.
- Persisting application data with localStorage.
- Creating reusable components.
- Building responsive interfaces with Tailwind CSS.

## 👨‍💻 Author

**Parvej Mulani**

- GitHub: [@parvej1362](https://github.com/parvej1362)
- LinkedIn: [Parvej Mulani](https://linkedin.com/in/parvej-mulani-26a309319)
- LeetCode: [Parvej_1362](https://leetcode.com/u/Parvej_1362/)

---

Developed as part of the **Celebrare Frontend React Internship Pre-Screening Assignment**.
