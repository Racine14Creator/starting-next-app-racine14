"use client";

import Link from "next/link";
import React from "react";

export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>The Blog</h1>
      <p>This is blog post: {params.slug}</p>
      <p>
        <Link href='/blog'>Go back</Link>
      </p>
    </main>
  );
}
