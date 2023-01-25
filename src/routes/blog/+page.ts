import type { PageLoad } from './$types';
 
export const load = (async({ params }) => {

    // https://www.aaronhubbard.dev/blogposts/text-from-module
    let posts = import.meta.glob('./markdown/*.md', {as: 'raw'});
    const iterablePostFiles = Object.entries(posts);

    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const resolvedPost = await resolver();
        const postPath = path.slice(11, -3);
          return {
            path: postPath,
            post: resolvedPost
          };
      
      })
    );

    return {
      body: allPosts
    };
 }) satisfies PageLoad;