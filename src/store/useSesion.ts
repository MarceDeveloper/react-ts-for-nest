import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { name_store } from '../../config_proyecto/store_config';

interface Role {
  id: number;
  name: string;
}

interface SessionData {
  userId: number;
  username: string;
  roles: Role[];
}

interface State {
  isAuthenticated: boolean;
  accessToken: string | null;
  sessionData: SessionData | null;
  setSession: (token: string, data: SessionData) => void;
  setAccessToken: (token: string) => void;
  clearSession: () => void;
}

export const useSesionStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        accessToken: null,
        sessionData: null,
        setSession: (token, data) => set({
          isAuthenticated: true,
          accessToken: token,
          sessionData: data,
        }),
        setAccessToken: (token) => set({
          accessToken: token,
        }),
        clearSession: () => set({
          isAuthenticated: false,
          accessToken: null,
          sessionData: null,
        }),
      }),
      {
        name: `${name_store}-auth-storage`, // nombre del almacenamiento en localStorage
      }
    ),
    { name: `${name_store}-auth-store` } // nombre para las DevTools
  )
);
