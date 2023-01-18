import fs from 'fs';
import matter from 'gray-matter';
import { ChallengeMetadata } from '../types';

const getChallengeMetadata = (): ChallengeMetadata[] => {
  const folder = 'src/challenges/';
  const files = fs.readdirSync(folder);
  const markdownLs = files.filter((file) => file.endsWith('.md'));

  const posts = markdownLs.map((fileName) => {
    const fileContents = fs.readFileSync(`src/challenges/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      position: matterResult.data.position.split(',').map((p: string) => p.trim()),
      difficulty: matterResult.data.difficulty,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

export default getChallengeMetadata;
