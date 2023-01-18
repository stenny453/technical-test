import cx from 'clsx';
import Link from 'next/link';
import { ChallengeMetadata } from '../types';

const PostPreview = (props: ChallengeMetadata) => {
  return (
    <div className="challenge-prev">
      <Link href={`/challenges/${props.slug}`}>
        <h4 className="challenge-prev-title">{props.title}</h4>
      </Link>
      <span className={cx('challenge-prev-lv', 'badge', `badge-${props.difficulty}`)}>{props.difficulty}</span>
      <span className="challenge-prev-pos">{JSON.stringify(props.position)}</span>
    </div>
  );
};

export default PostPreview;
