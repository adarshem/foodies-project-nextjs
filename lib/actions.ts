'use server'; // All the functions in this file will be executed on the server

export async function shareMeal(formData: FormData) {
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
      image: formData.get('image'),
    };
    console.log(meal);
  }