import { createProfileStore, ProfileStore } from "@/store/profile-store-ssr";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type ProfileStoreApi = ReturnType<typeof createProfileStore>;

export const ProfileStoreContext = createContext<ProfileStoreApi | null>(null);

export interface ProfileProviderProps {
  children: ReactNode;
  initialState?: ProfileStore;
}

export const ProfileProvider = ({
  initialState,
  children,
}: ProfileProviderProps) => {
  const store = useRef<ProfileStoreApi | null>(null);
  if (!store.current) {
    store.current = createProfileStore(initialState);
  }

  return (
    <ProfileStoreContext.Provider value={store.current}>
      {children}
    </ProfileStoreContext.Provider>
  );
};

/// client side 쓸려고 만든 훅
export const useProfileStore = <T,>(
  selector: (store: ProfileStore) => T
): T => {
  const store = useContext(ProfileStoreContext);
  if (!store) {
    throw new Error("useProfileStore must be used within a ProfileProvider");
  }
  return useStore(store, selector);
};
