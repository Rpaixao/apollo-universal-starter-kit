import { returnId, truncateTables } from '@gqlapp/database-server-ts';

export async function seed(knex, Promise) {
  await truncateTables(knex, Promise, ['post', 'comment']);

  await Promise.all(
    [...Array(20).keys()].map(async ii => {
      const post = await returnId(knex('post')).insert({
        title: `Package ${ii + 1}`,
        content: `Not Delivered`
      });

      await Promise.all(
        [...Array(2).keys()].map(async jj => {
          return returnId(knex('comment')).insert({
            post_id: post[0],
            content: `Comment title ${jj + 1} for post ${post[0]}`
          });
        })
      );
    })
  );
}
