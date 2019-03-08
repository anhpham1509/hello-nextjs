import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
  <li>
    <Link as={`/post/${props.slug}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const ShowLink = props => (
  <li>
    <Link as={`/show/${props.id}`} href={`/show?id=${props.id}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

const Index = props => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink slug='hello-nextjs' title='Hello Next.js' />
      <PostLink slug='learn-nextjs' title='Learn Next.js is awesome' />
      <PostLink slug='deploy-nextjs' title='Deploy apps with Zeit' />
    </ul>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <ShowLink {...show} />
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Index;
