import { create } from "zustand";

export const useNameStore = create<{
  name: string;
  setName: (name: string) => void;
}>((set) => ({
  name: "John",
  setName: (name: string) => set({ name }),
}));
