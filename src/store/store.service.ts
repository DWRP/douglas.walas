import {
  createJSONStorage,
  PersistStorage,
  type StateStorage,
} from "zustand/middleware";

export const storage: PersistStorage<any> | undefined = createJSONStorage(
  () => ({
    getItem: (name: string): string | null => {
      return localStorage.getItem(name) ?? null;
    },
    setItem: (name: string, value: string): void => {
      localStorage.setItem(name, value);
    },
    removeItem: (name: string): void => {
      localStorage.removeItem(name);
    },
  })
);
