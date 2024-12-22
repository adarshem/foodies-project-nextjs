import React from "react";
import Link from "next/link";

export default function Meals(): React.JSX.Element {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals Page</h1>
      <div style={{ textAlign: "center" }}>
        <p>
          <Link href={"/meals/meal_id_1"}>Meal - Chicken Biryani</Link>
        </p>
        <p>
          <Link href={"/meals/meal_id_2"}>Meal - Paneer Buttor Masla</Link>
        </p>
      </div>
    </main>
  );
}
