import { create } from "zustand";

import { User } from "../types/";

interface State {
  user: User;
  token: string;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  authenticate: () => void;
  logout: () => void;
}

const useUserStore = create<State>((set) => {
  return {
    user: {
      first_name: "",
      last_name: "",
      identification_number: "",
      phone: "",
      email: "",
      genre: "",
      birthdate: "",
      type_user: "",
    },
    token: "",
    isAuthenticated: false,
    setUser: (user) => set({ user }),
    setToken: (token) => set({ token }),
    authenticate: () => set({ isAuthenticated: true }),
    logout: () =>
      set({
        user: {
          first_name: "",
          last_name: "",
          identification_number: "",
          phone: "",
          email: "",
          genre: "",
          birthdate: "",
          type_user: "",
        },
        token: "",
        isAuthenticated: false,
      }),
  };
});

export default useUserStore;
