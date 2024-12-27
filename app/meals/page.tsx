import Link from 'next/link';
import MealsGrid from '@/components/meals/mealsGrid';
import { getMeals } from '@/lib/meals';
import classes from './page.module.css';
import React, { Suspense } from 'react';

// Server component that fetches meals from the database and renders them

async function Meals(): Promise<React.JSX.Element> {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage(): React.JSX.Element {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicium meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense> 
      </main>
    </>
  );
}
