# 🎬 NetMirror

NetMirror is a modern movie browsing web application built with React that allows users to discover, search, and manage their favorite movies with a smooth and responsive user experience.

---

## 🚀 Live Demo

👉 *(Will Add deployed link here after Vercel deployment)*

---

## ✨ Features

### 🔍 Search Movies

* Real-time movie search using TMDB API
* Debounced input to reduce unnecessary API calls and improve performance

### 🎯 Advanced Filtering

* Filter movies by:

  * Genre
  * Rating
  * Language
* Uses TMDB **discover API** for accurate filtering

### ♾ Infinite Scroll

* Automatically loads more movies as you scroll
* Implemented using **Intersection Observer API**
* Prevents unnecessary API calls with proper guards (`hasMore`, `loading`)

### ❤️ Favorites System

* Add/remove movies from favorites
* Persistent storage using **localStorage**
* Instant UI updates using **React Context API**

### 🎬 Movie Details & Trailer

* View detailed movie information
* Watch trailers dynamically fetched from API

### ⚡ Skeleton Loading

* Displays skeleton cards while loading data
* Improves perceived performance and user experience

---

## 🧠 Technical Highlights

### 📌 Intersection Observer API

Used for implementing infinite scroll efficiently without relying on scroll event listeners, improving performance.

### 📌 Debouncing

Prevents excessive API calls by delaying search execution until the user stops typing.

### 📌 Context API

Manages global state for favorites, avoiding prop drilling and keeping components clean.

### 📌 Local Storage Persistence

Ensures favorite movies remain saved even after page refresh.

### 📌 Controlled Components

Used for handling form inputs (search and filters) to maintain predictable UI behavior.

---

## 🛠 Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **TMDB API**
* **React Router**
* **Lucide Icons**

---


## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/netmirror.git

# Navigate into project
cd netmirror

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
VITE_API_KEY=your_tmdb_api_key
```

---

## 💡 Future Improvements

* Infinite scroll with virtualization for better performance
* Dark/light theme toggle
* Genre list fetched dynamically from API
* Better error handling & retry logic
* UI animations and transitions
* Login Authentication Page

---

## 🙌 Acknowledgements

* TMDB API for movie data
* Inspiration from modern streaming platforms

---

## 📌 Conclusion

NetMirror demonstrates real-world frontend concepts including API handling, performance optimization, state management, and user experience design.

---
