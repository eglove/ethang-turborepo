import { NextLink } from 'next-components';
import { formatList, humanReadableLocalDateTime } from 'util-typescript';

import { Breadcrumbs, Container } from '../components';
// Next 13 Beta, styles in components don't always work if not imported on a page
// eslint-disable-next-line @typescript-eslint/no-unused-vars,unused-imports/no-unused-imports
import betaStyles from '../components/header/header.module.css';
import styles from './blogs-layout.module.css';
import { getBlogs } from './data';

export default async function Blogs(): Promise<JSX.Element> {
  const blogs = await getBlogs();

  return (
    <Container>
      <Breadcrumbs
        links={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blogs' },
        ]}
      />
      <div>
        {blogs?.map(blog => {
          return (
            <div key={blog.title} style={{ height: '300px' }}>
              <NextLink
                linkProperties={{
                  className: styles.BlogLink,
                  href: `/blog/${blog.slug.current}`,
                }}
              >
                <div
                  className={styles.BlogContent}
                  style={{
                    background: `url(${blog.featuredImage.image.asset.url}) center no-repeat`,
                    height: `${blog.featuredImage.image.asset.metadata.dimensions.height}px`,
                    maxHeight: '300px',
                    width: '100%',
                  }}
                >
                  <h2>{blog.title}</h2>
                  <div>
                    {formatList(
                      blog.authors.map(blogAuthor => {
                        return blogAuthor.name;
                      })
                    )}
                  </div>
                  <div>{`Last Updated: ${humanReadableLocalDateTime(
                    blog.updatedAt
                  )}`}</div>
                </div>
              </NextLink>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
