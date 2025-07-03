import { departments } from "../data/departments";

export const getRandomDepartment = () =>
  departments[Math.floor(Math.random() * departments.length)];

export const getRandomRating = () => Math.floor(Math.random() * 5) + 1; // 1 to 5
