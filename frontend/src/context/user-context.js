import { createContext, useState } from 'react';

const UserContext = createContext(
  {
    user: null, // { name, email }
    setUser: (user) => {},
  }
);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleSetUser = (user) => {
    if (!user) {
      // localStorage.removeItem("token");
      setUser(null);
      return;
    }
    setUser({ name: user.name, email: user.email, phone: user.phone });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: handleSetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
