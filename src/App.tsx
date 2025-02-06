import { Toast } from "primereact/toast";
import { Suspense, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

// Components
import Spin from "./components/shared/Spin";

//Router
import { ProfileProvider } from "./pages/Profile/context";
import { useAppSelector } from "./redux/store";
import ProtectedRouter from "./routes/ProtectedRouter";
import ScrollToTop from "./components/shared/ScrollToTop";

export let toast: any;

function App() {
  toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />
      <BrowserRouter>
        <ScrollToTop />

        <Suspense
          fallback={
            <div className="spin">
              <Spin />
            </div>
          }
        >
          <ProfileProvider>
            <ProtectedRouter />
          </ProfileProvider>

          {/* <Router /> */}
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
