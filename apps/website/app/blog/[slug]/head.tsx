import { HeadTag } from '../../components/head-tag/head-tag';
import { getBlog } from './data';

export default async function Head({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const blog = await getBlog(params.slug);

  return <HeadTag title={blog.title} />;
}
