import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import User from '../domain/user';
import {
  loadUser as loadUserFromStorage,
  saveUser as saveUserInStorage,
} from '../repository/auth';

type UserOption = User | null;

interface AuthContextValue {
  user: UserOption;
  saveUser(user: User): void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  saveUser(_: User) {},
});

export function AuthWrapper({ children }: PropsWithChildren<{}>) {
  const [user, setUser] = useState<UserOption>(null);

  useEffect(() => {
    const userOption = loadUserFromStorage();
    setUser(userOption);
  }, [setUser]);

  const authContextValue = {
    user,
    saveUser(_user: User) {
      saveUserInStorage(_user);
      setUser(_user);
    },
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
