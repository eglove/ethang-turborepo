import { use } from 'react';

import { HeadTag } from '../../components/head-tag/head-tag';
import { getBlog } from './data';

export default function Head({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const blog = use(getBlog(params.slug));

  return <HeadTag title={blog.title} />;
}
