import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { asyncStorageAdapter } from '@/utils/storage';

export type SessionStoreState = {
  user: Record<string, unknown> | null;
};

export type SessionStoreActions = {
  reset: () => void;
  setUser: (user: Record<string, unknown> | null) => void;
};

export type SessionStore = SessionStoreState & SessionStoreActions;

export const DEFAULT_SESSION_STORE_STATE: SessionStoreState = {
  user: null,
};

export const useSessionStore = create<SessionStore>()(
  persist(
    set => ({
      ...DEFAULT_SESSION_STORE_STATE,
      reset: () => set(DEFAULT_SESSION_STORE_STATE),
      setUser: (user: Record<string, unknown> | null) => set({ user }),
    }),
    {
      name: '__session-storage',
      storage: createJSONStorage(() => asyncStorageAdapter),
    }
  )
);
