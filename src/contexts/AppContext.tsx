import { Application } from 'pixi.js';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface AppContextState {
  readonly app: Application;
  setApp: (application: Application) => void;
}

export const AppContext = createContext({} as AppContextState);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [app, setApp] = useState({} as Application);
  const appContext = { app, setApp } satisfies AppContextState;
  return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>;
};
