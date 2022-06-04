import { API_URL } from "./config";

const getMealById = async (mealId) => {
  const res = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  return await res.json();
};

const getAllCategories = async () => {
  const res = await fetch(`${API_URL}categories.php`);
  return await res.json();
};

const getFilterCategory = async (category) => {
  const res = await fetch(`${API_URL}filter.php?c=${category}`);
  return await res.json();
};

export { getMealById, getAllCategories, getFilterCategory };
