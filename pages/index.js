import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const getPosts = () => {
  return [
    {slug: 'hello-nextjs', title: 'Hello Next.js'},
    {slug: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    {slug: 'deploy-nextjs', title: 'Deploy apps with ZEIT'}
  ];
};

const Index = props => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map(post => (
        <li>
          <Link as={`/post/${post.slug}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>

    <hr />

    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li>
          <Link as={`/show/${show.id}`} href={`/show?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
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
