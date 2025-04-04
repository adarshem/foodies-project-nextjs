import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

// Dynamic metadata for the meal details page
export async function generateMetadata({
  params,
}: {
  params: { mealSlug: string };
}): Promise<{ title: string }> {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
  };
}

export default function MealDetails({
  params,
}: {
  params: { mealSlug: string };
}): React.JSX.Element {
  const mealData = getMeal(params.mealSlug);

  if (!mealData) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={mealData.image} alt={mealData.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{mealData.title}</h1>
          <p className={classes.creator}>
            by{' '}
            <a href={`mailto:${mealData.creator_email}`}>{mealData.creator}</a>
          </p>
          <p className={classes.summary}>{mealData.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: mealData?.instructions?.replace(/\n/g, '<br>'),
          }}
        ></p>
      </main>
    </>
  );
}
