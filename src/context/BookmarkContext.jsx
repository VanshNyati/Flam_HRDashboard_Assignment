import { createContext, useContext, useState } from "react";

// Create Context
const BookmarkContext = createContext();

// Custom Hook for easy access
export const useBookmark = () => useContext(BookmarkContext);

// Provider Component
export const BookmarkProvider = ({ children }) => {
  const [bookmarkedUsers, setBookmarkedUsers] = useState([]);

  const toggleBookmark = (user) => {
    const isBookmarked = bookmarkedUsers.some((u) => u.id === user.id);
    if (isBookmarked) {
      setBookmarkedUsers((prev) => prev.filter((u) => u.id !== user.id));
    } else {
      setBookmarkedUsers((prev) => [...prev, user]);
    }
  };

  const isUserBookmarked = (id) => {
    return bookmarkedUsers.some((u) => u.id === id);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedUsers, toggleBookmark, isUserBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
