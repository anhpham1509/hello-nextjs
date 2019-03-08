module.exports = {
  exportPathMap: () => {
    return {
      '/': {page: '/'},
      '/about': {page: '/about'},
      '/post/hello-nextjs': {page: '/post', query: {title: 'Hello Next.js'}},
      '/post/learn-nextjs': {page: '/post', query: {title: 'Learn Next.js is awesome'}},
      '/post/deploy-nextjs': {page: '/post', query: {title: 'Deploy apps with Zeit'}},
      '/post/exporting-pages': {page: '/post', query: {title: 'Learn to Export HTML Pages'}}
    };
  }
};
