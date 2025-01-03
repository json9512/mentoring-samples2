import { createStore } from "zustand";

export type ProfileState = {
  name: string;
  age: number;
};

// 함수
export type ProfileActions = {
  setName: (name: string) => void;
  setAge: (age: number) => void;
};

export type ProfileStore = ProfileState & ProfileActions;

export const defaultProfileState: ProfileState = {
  name: "John",
  age: 18,
};

export const createProfileStore = (
  initialState: ProfileState = defaultProfileState
) => {
  return createStore<ProfileStore>((set) => ({
    ...initialState,
    setName: (name: string) => set({ name }),
    setAge: (age: number) => set({ age }),
  }));
};
