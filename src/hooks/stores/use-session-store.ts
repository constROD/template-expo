import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type Session = { access_token: string };

export interface SessionStore {
  /* States */
  session: null | Session;

  /* Functions */
  setSession: (session: null | Session) => void;
}

export const useSessionStore = create(
  immer<SessionStore>(set => ({
    /* States */
    session: null,

    /* Functions */
    setSession: data => {
      set(state => {
        state.session = data;
      });
    },
  }))
);
