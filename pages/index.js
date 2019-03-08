import Layout from '../components/MyLayout.js';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link as={`/post/${props.slug}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink slug='hello-nextjs' title='Hello Next.js' />
      <PostLink slug='learn-nextjs' title='Learn Next.js is awesome' />
      <PostLink slug='deploy-nextjs' title='Deploy apps with Zeit' />
    </ul>
  </Layout>
);

export default Index;
