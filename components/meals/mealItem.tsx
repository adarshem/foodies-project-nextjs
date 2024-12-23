import Link from 'next/link';
import Image from 'next/image';

import classes from './styles/mealItem.module.css';

export default function MealItem({
  title,
  id,
  image,
  summary,
  creator,
}: {
  title: string;
  id: string;
  image: string;
  summary: string;
  creator: string;
}): React.JSX.Element {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
