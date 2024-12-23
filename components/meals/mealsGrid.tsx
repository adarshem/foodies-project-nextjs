import MealItem from './mealItem';
import classes from './styles/mealsGrid.module.css';

export default function MealsGrid({
  meals,
}: {
  meals: {
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
  }[];
}): React.JSX.Element {
  return (
    <ul className={classes.meals}>
      {meals?.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
