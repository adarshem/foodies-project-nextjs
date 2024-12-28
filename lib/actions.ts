'use server';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

// All the functions in this file will be executed on the server

function isInvalidText(text: string) {
  return !text || text.trim() === '';
}

export async function shareMeal(prevState: any, formData: FormData) {
  const meal = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    image: formData.get('image') as File,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.indexOf('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input AEM',
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}
