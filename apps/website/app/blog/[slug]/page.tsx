import { SanityNextImage } from 'next-components';
import { humanReadableLocalDateTime } from 'util-typescript';

import { ethangSanityClient } from '../../../util/sanity';
import { Breadcrumbs, Container } from '../../components';
import PortableTextWrapper from '../../components/portable-text/portable-text-wrapper';
import styles from './blog-layout.module.css';
import { getBlog } from './data';

export const revalidate = 60;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const paths = await ethangSanityClient.fetch<
    Array<{ slug: { current: string } }>
  >('*[_type == "blog"]{slug}');

  return paths.map(path => {
    return {
      slug: path.slug.current,
    };
  });
}

export default async function Blog({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const blog = await getBlog(params.slug);

  const authors = blog.authors.map(blogAuthor => {
    return (
      <span itemProp="author" key={blogAuthor.name}>
        {blogAuthor.name}
      </span>
    );
  });

  return (
    <Container
      containerProperties={{
        itemScope: true,
        itemType: 'https://schema.org/BlogPosting',
      }}
    >
      <Breadcrumbs
        links={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blogs' },
          { href: `/blog/${blog.slug.current}`, label: blog.title },
        ]}
      />
      <div className={styles.BlogInfo}>
        <div>
          <h1 className={styles.Title} itemProp="headline">
            {blog.title}
          </h1>
          <div>
            Author{blog.authors.length > 1 ? 's' : ''}: {authors}
          </div>
          <div>
            Last Updated:{' '}
            <time dateTime={blog.updatedAt}>{`${humanReadableLocalDateTime(
              blog.updatedAt
            )}`}</time>
          </div>
        </div>
        <SanityNextImage
          altText={blog.featuredImage.description}
          image={blog.featuredImage.image}
        />
      </div>
      <hr />
      <article>
        {blog.reviews && (
          <div
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Course"
          >
            {blog.reviews.title && (
              <p>
                Course: <span itemProp="name">{blog.reviews.title}</span>
              </p>
            )}
            <p
              itemScope
              itemProp="aggregateRating"
              itemType="https://schema.org/AggregateRating"
            >
              Rating: <span itemProp="ratingValue">{blog.reviews.rating}</span>
              /5
            </p>
            <p>
              Instructors:{' '}
              {blog.reviews.instructors.map(instructor => {
                return (
                  <span itemProp="author" key={instructor.name}>
                    {instructor.name}
                  </span>
                );
              })}
            </p>
          </div>
        )}
        <PortableTextWrapper value={blog.content} />
      </article>
    </Container>
  );
}
