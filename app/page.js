import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <img src='/logo.png' alt='A server surrounded by magic sparkles.' />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link className='link' href='/about'>
          About Us
        </Link>
      </p>
      <p>
        <Link className='link' href='/blog'>
          Blog
        </Link>
      </p>
    </main>
  );
}
