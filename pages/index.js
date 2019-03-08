import Link from 'next/link';

const Index = () => (
  <div>
    <Link href='/about'>
      <a style={{fontSize: 20}}>About Page</a>
    </Link>
    <p>Hello Next.js</p>
    <Link href='/about'>
      <button>Go to About Page</button>
    </Link>
  </div>
);

export default Index;
