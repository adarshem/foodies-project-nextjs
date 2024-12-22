import React from "react";

export default function MealDetails({
  params,
}: {
  params: { mealId: string };
}): React.JSX.Element {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Meal details for: - {params.mealId}
      </h1>
    </main>
  );
}
