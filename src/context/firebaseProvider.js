import {useEffect, useState, useContext, createContext} from "react";

import {db, firebase, googleAuthProvider} from "../firebase/firebaseConfig";

const FirebaseContext = createContext({
  user: null,
  loading: true,
  isLoggedIn: false,
  logout: () => {},
  logWithGoogle: () => {},
  deleteCollection: () => {},
  addProductToCollection: () => {},
  addVoteToCollection: () => {},
});

const FirebaseProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIisLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    firebase.auth().signOut();
  };

  const logWithGoogle = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  const deleteCollection = (collection) => {
    db.collection(collection)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
  };

  const addProductToCollection = (collection, doc, product) => {
    db.collection(collection)
      .doc(doc)
      .set(product)
      .then(() => {})
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const addVoteToCollection = (user, productReview, productSelected, productLetter) => {
    db.collection("versus/001/votes").doc(user.uid).set({
      name: user.displayName,
      photoURL: user.photoURL,
      productReview,
      productSelected,
      productLetter,
    });
  };

  useEffect(() => {
    const cancelAuthListener = firebase.auth().onIdTokenChanged((userAuth) => {
      setUser(userAuth);
      if (userAuth) {
        setIisLoggedIn(true);
      } else {
        setIisLoggedIn(false);
      }
      setLoading(false);
    });

    return () => cancelAuthListener();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        user,
        loading,
        isLoggedIn,
        logout,
        logWithGoogle,
        deleteCollection,
        addProductToCollection,
        addVoteToCollection,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

function useFirebase() {
  return useContext(FirebaseContext);
}

export {FirebaseProvider, useFirebase};
