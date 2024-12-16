import Link from "next/link";
import React from "react";

export default function page() {
  const blogs = [
    { id: 1, title: "Blog 1" },
    { id: 2, title: "Blog 2" },
  ];
  return (
    <main>
      <h3>The Blog</h3>
      {blogs.map((blog) => (
        <p key={blog.id}>
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </p>
      ))}
    </main>
  );
}
