// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./Layout";
import Home from "./pages/Home";
import Create from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import theme from "./utils/constants/theme";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/movie/create" element={<Create/>} />
            <Route path="/movie/now" element={<NowPlaying/>} />
            <Route path="/movie/popular" element={<Popular/>} />
            <Route path="/movie/top" element={<TopRated/>} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
