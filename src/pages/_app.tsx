import { ReactNode } from "react";
import { AppPropsWithLayout as AppProps } from "../common/constants/global";
import MainLayout from "../components/layouts/MainLayout";
import store from "../app/store";
import { Provider } from "react-redux";
import "../styles/global.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = ({ Component, pageProps }: AppProps) => {
  const getLayout =
    Component.getLayout ??
    ((page: ReactNode) => <MainLayout>{page}</MainLayout>);

  return (
    <>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme='colored'
        />
      </Provider>
    </>
  );
};

export default App;
