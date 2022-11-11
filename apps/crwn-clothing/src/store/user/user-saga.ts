import type { User, UserCredential } from 'firebase/auth';
import type { DocumentData } from 'firebase/firestore';
import type {
  CallEffect,
  PutEffectDescriptor,
  SimpleEffect,
} from 'redux-saga/effects';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInWithEmailPassword,
  signInWithGooglePopup,
  signOutUser,
} from '../../utils/firebase/utils-firebase';
import type { UserActionReturn } from './user-action';
import {
  signInFail,
  signInSuccess,
  signOutFail,
  signOutSuccess,
  signUpFail,
  signUpSuccess,
} from './user-action';

export type FetchCategoriesGenerator =
  | CallEffect<DocumentData | void>
  | SimpleEffect<'PUT', PutEffectDescriptor<UserActionReturn<unknown>>>;

export type IsUserAuthenticatedGenerator =
  | CallEffect<User | null>
  | SimpleEffect<'PUT', PutEffectDescriptor<UserActionReturn<unknown>>>;

export function* getSnapshotFromUserAuth(
  user: User
): Generator<FetchCategoriesGenerator> {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, user);

    const snapshot = userSnapshot as {
      data(): Record<string, unknown>;
      // eslint-disable-next-line @typescript-eslint/member-ordering
      id: string;
    };

    const authenticatedUser = {
      id: snapshot.id,
      ...snapshot.data(),
    } as unknown as User;

    yield put(signInSuccess(JSON.stringify(authenticatedUser)));
  } catch (error: unknown) {
    yield put(signInFail(JSON.stringify(error)));
  }
}

export function* isUserAuthenticated(): Generator<IsUserAuthenticatedGenerator> {
  try {
    const user = yield call(getCurrentUser);

    if (user !== null) {
      return;
    }

    // @ts-expect-error I don't know how to type this
    yield call(getSnapshotFromUserAuth, user);
  } catch (error: unknown) {
    yield put(signInFail(JSON.stringify(error)));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: {
  payload: { email: string; password: string };
}): Generator {
  try {
    const auth = yield call(signInWithEmailPassword, email, password);
    const { user } = auth as UserCredential;
    yield call(getSnapshotFromUserAuth, user);
  } catch (error: unknown) {
    yield put(signInFail(JSON.stringify(error)));
  }
}

export function* signInWithGoogle(): Generator {
  try {
    const auth = yield call(signInWithGooglePopup);
    // @ts-expect-error Assume this is here
    const user = auth.user as User;
    yield call(getSnapshotFromUserAuth, user);
  } catch (error: unknown) {
    yield put(signInFail(JSON.stringify(error)));
  }
}

export function* signUp({
  payload,
}: {
  payload: { displayName: string; email: string; password: string };
}): Generator {
  const { email, password } = payload;

  try {
    // @ts-expect-error Assume is User
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user as User));
  } catch (error: unknown) {
    yield put(signUpFail(JSON.stringify(error)));
  }
}

export function* signInAfterSignUp({
  payload,
}: {
  payload: { user: User };
}): Generator {
  const { user } = payload;
  yield call(getSnapshotFromUserAuth, user);
}

export function* signOut(): Generator {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error: unknown) {
    yield put(signOutFail(JSON.stringify(error)));
  }
}

export function* onEmailSignInStart(): Generator {
  // @ts-expect-error let it go
  yield takeLatest('user/EMAIL_SIGN_IN_START', signInWithEmail);
}

export function* onGoogleSignInStart(): Generator {
  yield takeLatest('user/GOOGLE_SIGN_IN_START', signInWithGoogle);
}

export function* onSignUpStart(): Generator {
  // @ts-expect-error let it go
  yield takeLatest('user/SIGN_UP_START', signUp);
}

export function* onSignUpSuccess(): Generator {
  // @ts-expect-error let it go
  yield takeLatest('user/SIGN_UP_SUCCESS', signInAfterSignUp);
}

export function* onSignOutStart(): Generator {
  yield takeLatest('user/SIGN_OUT_START', signOut);
}

export function* onCheckUserSession(): Generator {
  yield takeLatest('user/CHECK_USER_SESSION', isUserAuthenticated);
}

export function* userSaga(): Generator {
  yield all([
    call(onCheckUserSession),
    call(onEmailSignInStart),
    call(onGoogleSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
