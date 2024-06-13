export interface IAuthStore {
  token: string | null;
  isAuth: boolean | null;
  isInitiated: boolean;

  logout: () => void;
  setToken: (token: string) => void;
  setIsAuth: (isAuth: boolean) => void;
  setIsInitiated: (isInitiated: boolean) => void;
}
