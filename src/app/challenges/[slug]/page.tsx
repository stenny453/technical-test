import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getChallengeMetadata from '../../../lib/getChallengeMetadata';

const getContent = (slug: string) => {
  const folder = 'src/challenges/';
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

const ChallengePage = (props: any) => {
  const slug = props.params.slug;
  const post = getContent(slug);
  return (
    <article className="challenge-view typo">
      <Markdown>{post.content}</Markdown>
    </article>
  );
};

export default ChallengePage;
