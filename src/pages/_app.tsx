import { ProfileProvider } from "@/contexts/profile.context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProfileProvider
      initialState={{
        name: "Lee",
        age: 18,
        setName: () => {},
        setAge: () => {},
      }}
    >
      <Component {...pageProps} />
    </ProfileProvider>
  );
}
