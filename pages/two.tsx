import Head from "next/head";

import {useAuth} from "../src/authProvider";
import FirebaseAuth from "../src/firebaseAuth";
import styles from "../styles/Home.module.css";
import {firebase} from "../src/firebaseConfig";

// const db = firebase.database();

export default function Home() {
  const {user, loading, logout} = useAuth();

  if (loading) return <p>loading</p>;
  if (!user) return <FirebaseAuth />;
  const {displayName, email, photoURL} = user;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <h3>{displayName}</h3>
      <img alt="" src={photoURL} />
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
