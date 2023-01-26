import fs from 'fs';
import NextLink, { LinkProps } from 'next/link';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getChallengeMetadata from '../../../lib/getChallengeMetadata';

const getContent = (slug: string) => {
  const folder = 'challenges/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const challenges = getChallengeMetadata();
  return challenges.map((challenge) => ({
    slug: challenge.slug,
  }));
};

const Link = (props: LinkProps) => <NextLink {...props} target="_blank" />;

const ChallengePage = (props: any) => {
  const slug = props.params.slug;
  const post = getContent(slug);
  return (
    <article className="challenge-view typo">
      <Markdown
        options={{
          overrides: {
            a: {
              component: Link,
              props: {
                className: 'link',
              },
            },
          },
        }}
      >
        {post.content}
      </Markdown>
    </article>
  );
};

export default ChallengePage;
