import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(() => {}, 5000)); // Simulate a delay for loading state
  const meals = db.prepare('SELECT * FROM meals').all();
  return meals;
}

export function getMeal(slug) {
  const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  return meal;
}
