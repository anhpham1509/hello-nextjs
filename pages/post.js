import {withRouter} from 'next/router';
import Layout from '../components/MyLayout.js';
import loadDB from '../lib/load-db';

const Post = ({story}) => (
  <Layout>
    <h1>{story.title}</h1>
    <p>
      URL:{' '}
      <a target='_blank' href={story.url}>
        {story.url}
      </a>
    </p>
  </Layout>
);

Post.getInitialProps = async ({query}) => {
  const db = await loadDB();
  const item = await db
    .child('item')
    .child(query.id)
    .once('value');
  const story = item.val();

  return {story};
};

export default withRouter(Post);
