import cx from 'clsx';
import Link from 'next/link';
import getChallengeMetadata from '../../../lib/getChallengeMetadata';
import { Sidebar } from '../../../components/Sidebar';
import './styles.css';

export default function ChallengeLayout({ children }: { children: React.ReactNode }) {
  const challenges = getChallengeMetadata();

  return (
    <div className={cx('challenge-section')}>
      <Sidebar>
        <ul className="">
          {challenges.map((challenge) => (
            <li key={challenge.slug}>
              <Link href={`/challenges/${challenge.slug}`} scroll>
                {challenge.title}
              </Link>
            </li>
          ))}
        </ul>
      </Sidebar>
      <div className="challenge-content">{children}</div>
    </div>
  );
}
