import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link href={'/'}>
        <a>home</a>
      </Link>
      <Link href={'/food'}>
        <a>food</a>
      </Link>
      <Link href={'/drinks'}>
        <a>drinks</a>
      </Link>
      <Link href={'/basket'}>
        <a>basket</a>
      </Link>
    </div>
  );
};

export default SideBar;
