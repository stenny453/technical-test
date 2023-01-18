import Link from 'next/link';
import ChallengePreview from '../components/ChallengePreview';
import getChallengeMetadata from '../lib/getChallengeMetadata';
import styles from '../styles/page.module.css';

export default function Home() {
  const challenges = getChallengeMetadata();
  return (
    <main className={styles.main}>
      <div id="welcome" className={styles['main-inner']}>
        <h1>Welcome!</h1>
        <p>
          <strong>Keep calm</strong>, we are sure you will be able to solve this ;-)
        </p>

        <div className="call-to-action">
          <Link className="btn btn-2x" href="/#instructions">
            Get Started!
          </Link>
        </div>

        <section className="section" id="instructions">
          <h2>Instructions</h2>
          <p>
            We have prepared a bunch of coding challenges for you, according to the position target, take the most you are comfortable with and
            relevant for your position.
          </p>
          <p>
            Note that you don&apos;t have to carry about project structure, you will only have to <strong>bring changes on specific files</strong>,
            either you have to fill a function, changes a component behavior or eventually add a new component or/and function.
          </p>
          <div>
            To complete this challenge you have to
            <ol>
              <li>
                <h4>Make initial setup</h4>
                <span>
                  Create your own fork of the repository in github, follow this link{' '}
                  <a target="_blank" href="https://github.com/WAUIO/technical-test/fork" rel="noreferrer">
                    https://github.com/WAUIO/technical-test/fork
                  </a>
                  . Then register remote URL using <code>git remote add fork [repository-fork-url]</code>. Now, create a new branch named{' '}
                  <code>challenge/[surname]</code>, you will put all your changes in this new branch
                </span>
              </li>
              <li>
                <h4>First commit</h4>
                <span>
                  Add yourself as an author in <code>package.json</code> file, then commit your changes and push them to your forked repository as
                  your 1st commit.
                  <pre className="code">
                    {`...
"author": {
  "name": "Your Name",
  "email": "Your email"
}
...`}
                  </pre>
                </span>
              </li>
              <li>
                <h4>Take the Challenge!</h4>
                <span>
                  Pick challenges as you feel it. <strong>You don&apos;t have to finish all of them</strong>, just pick the ones you can complete
                  within <strong>2 hours</strong>. If you need or have more time, just go ahead, there is no limit on time. For convenience, start
                  with easiest one then go through the harder ones. You can find details of each challenge by following the link related to each of
                  them. If you are able to do more than one challenge, keep it all in your current branch but make sure to commit each challenge
                  separately.
                </span>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="challenges">
          <h2>Challenges</h2>

          <div className="challenge-list">
            {challenges.map((challenge) => (
              <ChallengePreview key={challenge.slug} {...challenge} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
