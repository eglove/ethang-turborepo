import { SignIn } from '../../components/sign-in/sign-in';
import { SignUp } from '../../components/sign-up/sign-up';
import styles from './authentication.module.css';

export function Authentication(): JSX.Element {
  return (
    <div className={styles.AuthenticationContainer}>
      <SignIn />
      <SignUp />
    </div>
  );
}
