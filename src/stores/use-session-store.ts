// import { create } from 'zustand';

// export type SessionStoreState = {
//   profile: User | null;
//   accessToken: string | null;
// };

// export type SessionStoreEvents = {
//   setProfile: (profile: User | null) => void;
//   setAccessToken: (accessToken: string | null) => void;
//   clearSession: () => void;
// };

// export type SessionStore = SessionStoreState & SessionStoreEvents;

// export const useSessionStore = create<SessionStore>(set => ({
//   profile: null,
//   accessToken: null,
//   setProfile: (profile: User | null) => set({ profile }),
//   setAccessToken: (accessToken: string | null) => set({ accessToken }),
//   clearSession: () => set({ profile: null, accessToken: null }),
// }));
