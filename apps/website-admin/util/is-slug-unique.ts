// export function isSlugUnique(
//   slug: string,
//   options: { document: { _id: string } }
// ): boolean {
//   const { document } = options;
//
//   const id: string = document._id.replace(/^drafts\./, '');
//   const parameters = {
//     draft: `drafts.${id}`,
//     published: id,
//     slug,
//   };
//
//   const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;
//
//   return client.fetch(query, parameters);
// }
export {};
