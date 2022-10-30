import Script from 'next/script';
import { SanityNextImage } from 'next-components';
import { JsonLd, jsonLdScriptProps } from 'react-schemaorg';
import type { Blog as BlogSchema, Review } from 'schema-dts';
import { humanReadableLocalDateTime } from 'util-typescript';

import { ethangSanityClient } from '../../../util/sanity';
import { Breadcrumbs, Container } from '../../components';
import PortableTextWrapper from '../../components/portable-text/portable-text-wrapper';
import styles from './blog-layout.module.css';
import { getBlog } from './data';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function generateStaticParams() {
  const paths = await ethangSanityClient.fetch<
    Array<{ slug: { current: string } }>
  >('*[_type == "blog"]{slug}');

  return paths.map(path => {
    return {
      slug: path.slug.current,
    };
  });
}

export default async function Blog({ params }: any): Promise<JSX.Element> {
  const blog = await getBlog(params.slug);

  const authors = blog.authors.map(blogAuthor => {
    return blogAuthor.name;
  });

  return (
    <Container>
      <Script
        {...jsonLdScriptProps<BlogSchema>({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          audience: 'Developers',
          author: {
            '@type': 'Person',
            name: 'Ethan Glover',
            url: 'https://ethang.dev/',
          },
          dateModified: new Date(blog.updatedAt).toUTCString(),
          datePublished: new Date(blog.publishedAt).toUTCString(),
          description: blog.description,
          headline: blog.title,
          image: blog.featuredImage.image.asset.url,
          thumbnailUrl: `${blog.featuredImage.image.asset.url}`,
        })}
      />
      {typeof blog?.reviews === 'undefined' || blog?.reviews === null ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
      ) : (
        <JsonLd<Review>
          item={{
            '@context': 'https://schema.org',
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: authors?.[0],
            },
            creator: blog?.reviews.instructors?.[0].name,
            itemReviewed: {
              '@type': 'Course',
              image: blog.featuredImage.image.asset.url,
            },
            name: blog?.reviews.title,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: blog?.reviews.rating,
            },
          }}
        />
      )}
      <Breadcrumbs
        links={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blogs' },
          { href: `/blog/${blog.slug.current}`, label: blog.title },
        ]}
      />
      <div className={styles.BlogInfo}>
        <div>
          <h1 className={styles.Title}>{blog.title}</h1>
          <div>
            Author{blog.authors.length > 1 ? 's' : ''}: {authors}
          </div>
          <div>{`Last Updated: ${humanReadableLocalDateTime(
            blog.updatedAt
          )}`}</div>
        </div>
        <SanityNextImage
          altText={blog.featuredImage.description}
          image={blog.featuredImage.image}
        />
      </div>
      <hr />
      <article>
        <PortableTextWrapper value={blog.content} />
      </article>
    </Container>
  );
}
