import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>take a break</h1>
      <Link href={'/food'}>
        <a style={{ color: 'var(--orange)' }}>
          <h1>food</h1>
        </a>
      </Link>
    </>
  );
}
