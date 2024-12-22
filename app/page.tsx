import React from "react";
import Link from "next/link";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <div style={{ textAlign: "center" }}>
        <p>
          <Link href={"/meals"}>Go to meals</Link>
        </p>
        <p>
          <Link href={"/meals/share"}>Go to Share</Link>
        </p>
        <p>
          <Link href={"/community"}>Go to Community</Link>
        </p>
      </div>
    </main>
  );
}
