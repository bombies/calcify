import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DarkModeWrapper from "../components/DarkModeWrapper";
import {Provider} from "react-redux";
import {persistor, store} from "../utils/redux/GlobalStore";
import {PersistGate} from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <DarkModeWrapper>
                  <Component {...pageProps} />
              </DarkModeWrapper>
          </PersistGate>
      </Provider>
  )
}
