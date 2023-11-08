/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../Firebase/firebase.confiq";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      const userEmail = loggedUser?.email || user?.email;
      const loggedEmail = { email: userEmail };

      setUser(loggedUser);
      console.log("logged user", loggedUser);
      setLoading(false);
      if (loggedUser) {
        axios
          .post("http://localhost:5000/jwt", loggedEmail, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token respnsive", res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", loggedEmail, {
            whitCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
