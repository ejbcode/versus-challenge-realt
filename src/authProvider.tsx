import {useEffect, useState, useContext, createContext, FunctionComponent} from "react";

import {db, firebase, googleAuthProvider} from "./firebaseConfig";

interface AuthContextState {
  user: firebase.User | null;
  loading: boolean;
  isLoggedIn: boolean;
  logout: () => void;
  logWithGoogle: () => void;
}

const AuthContext = createContext<AuthContextState>({
  user: null,
  loading: true,
  isLoggedIn: false,
  logout: () => {},
  logWithGoogle: () => {},
});

const AuthProvider: FunctionComponent = ({children}) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoggedIn, setIisLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const logout = () => {
    firebase.auth().signOut();
  };

  const logWithGoogle = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
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
    <AuthContext.Provider value={{user, loading, isLoggedIn, logout, logWithGoogle}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export {AuthProvider, useAuth};
