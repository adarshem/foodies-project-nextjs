import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

// Get all meals from the sqlite database
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // For checking loading state
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug: string) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export function deleteMeal(slug: string) {
  db.prepare('DELETE FROM meals WHERE slug = ?').run(slug);
}

export async function saveMeal(meal: {
  title: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
  image: File;
  slug?: string;
}) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  // Save the image to the filesystem public folder
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = Buffer.from(await meal.image.arrayBuffer());
  stream.write(bufferedImage, (error) => {
    if (error) {
      throw new Error('Error saving image');
    }
  });

  const imagePath = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals 
      (title, slug, image, summary, instructions, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).run(
    meal.title,
    meal.slug,
    imagePath,
    meal.summary,
    meal.instructions,
    meal.creator,
    meal.creator_email
  );
}
