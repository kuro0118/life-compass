import React, { useEffect, useState } from "react";
import { auth } from "../../src/plugins/firabase";
import { AuthContext } from '../contexts/AuthContext';
import loginUser from '../functions/loginUser';
import signupUser from '../functions/signupUser';

// chips: childrenにはAuthProviderコンポーネントでラップした子コンポーネントが入っている？
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        login: loginUser,
        signup: signupUser,
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};