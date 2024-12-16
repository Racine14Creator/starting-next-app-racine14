"use client";

import Link from "next/link";

export default function Error() {
  return (
    <main>
      <h1>Something went wrong!</h1>
      <p>
        <Link href='/'>Go back</Link>
      </p>
    </main>
  );
}
