import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { GlobalStyle } from "./GlobalStyle";

const SharedLayout = lazy(() => import('./components/SharedLayout'));
const Home = lazy(() => import('./pages/Home'));
const Tweets = lazy(() => import('./pages/Tweets'));

function App() {
  return (
    <>
    <Layout>
      <GlobalStyle />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/'element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='tweets' element={<Tweets />} />
            <Route path="*" element={<h1>NotFound</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
    </>
  );
}

export default App;
