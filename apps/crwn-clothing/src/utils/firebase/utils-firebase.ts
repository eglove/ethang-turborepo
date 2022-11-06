// https://firebase.google.com/docs/web/setup#available-libraries
import type { FirebaseApp } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import type {
  Auth,
  NextOrObserver,
  Unsubscribe,
  User,
  UserCredential,
} from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import type { DocumentData, Firestore } from 'firebase/firestore';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const defaultConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

export class Firebase {
  public app: FirebaseApp;
  public auth: Auth;
  public database: Firestore;
  public googleAuthProvider: GoogleAuthProvider;

  constructor(firebaseConfig = defaultConfig) {
    this.app = initializeApp(firebaseConfig);
    this.googleAuthProvider = new GoogleAuthProvider();
    this.auth = getAuth();
    this.database = getFirestore();

    this.googleAuthProvider.setCustomParameters({
      prompt: 'select_account',
    });
  }

  public async authStateChangedListener(
    callback: NextOrObserver<User>
  ): Promise<Unsubscribe> {
    return onAuthStateChanged(this.auth, callback);
  }

  public async createUserDocumentFromAuth(
    userAuth: User
  ): Promise<DocumentData | void> {
    const userDocumentReference = doc(this.database, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocumentReference);

    if (userSnapshot.exists()) {
      return userDocumentReference;
    }

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentReference, {
        createdAt,
        displayName,
        email,
      });
      return;
    } catch (error: unknown) {
      console.error('Error creating user.', error);
    }
  }

  public async createAuthUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  public async signInAuthUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  public async signInWithGooglePopup(): Promise<UserCredential> {
    return signInWithPopup(this.auth, this.googleAuthProvider);
  }

  public async signInWithGoogleRedirect(): Promise<never> {
    return signInWithRedirect(this.auth, this.googleAuthProvider);
  }

  public async signOutUser(): Promise<void> {
    return signOut(this.auth);
  }
}

export const firebase = new Firebase();
