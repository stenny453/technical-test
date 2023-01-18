import cx from 'clsx';
import Link from 'next/link';
import getChallengeMetadata from '../../../lib/getChallengeMetadata';
import './styles.css';

export default function ChallengeLayout({ children }: { children: React.ReactNode }) {
  const challenges = getChallengeMetadata();
  return (
    <div className={cx('challenge-section')}>
      <aside className="sidebar">
        <ul className="">
          {challenges.map((challenge) => (
            <li key={challenge.slug}>
              <Link href={`/challenges/${challenge.slug}`}>{challenge.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="challenge-content">{children}</div>
    </div>
  );
}
