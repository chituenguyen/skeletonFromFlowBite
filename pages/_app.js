import "../styles/globals.css";
import { ReactQueryProvider } from "../const/ReactQueryProvideer";
import { ThemeProvider } from "next-themes";
import 'flowbite/dist/flowbite.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ReactQueryProvider>
        <Component {...pageProps} />
      </ReactQueryProvider>
    </ThemeProvider>
  );
}

export default MyApp;
