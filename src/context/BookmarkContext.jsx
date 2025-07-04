import { createContext, useContext, useState, useEffect } from "react";

const BookmarkContext = createContext();

export const useBookmark = () => useContext(BookmarkContext);

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedUsers, setBookmarkedUsers] = useState(() => {
    // Load from localStorage on first render
    const stored = localStorage.getItem("bookmarkedUsers");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Save to localStorage whenever bookmarks change
    localStorage.setItem("bookmarkedUsers", JSON.stringify(bookmarkedUsers));
  }, [bookmarkedUsers]);

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
