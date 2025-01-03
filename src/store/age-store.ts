import { create } from "zustand";

export const useAgeStore = create<{
  age: number;
  setAge: (age: number) => void;
}>((set) => ({
  age: 18,
  setAge: (age: number) => set({ age }),
}));
