import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import SinglePage from "./SinglePage";
import "../css/main.css";
import Content from "./Content";
import Header from "./Header";
import Popular from "./Popular";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        {["/", "/movies"].map((path) => (
          <Route
            key="all-movies"
            path={path}
            element={
              <>
                <Header />
                <Content type="movie" />
              </>
            }
          />
        ))}

        {/* <Route key="all-movies" path="/movies" element={
                <>
                <Header/>
                <Content type="movie"/>
                </>
            }/> */}
        <Route
          key="all-series"
          path="/series"
          element={
            <>
              <Header />
              <Content type="tv" />
            </>
          }
        />
        <Route path="/:type/:id" element={<SinglePage />} />

        <Route path="/popular/movie" element={
           <>
            <Header/>
            <Popular page="popular" type="movie"/>
           </>
        } />

        <Route path="/popular/series" element={
           <>
            <Header/>
            <Popular page="popular" type="tv"/>
           </>
        } />

        <Route path="/trending/series" element={
           <>
            <Header/>
            <Popular page="trending" type="tv"/>
           </>
        } />


        <Route path="/trending/movie" element={
           <>
            <Header/>
            <Popular page="trending" type="movie"/>
           </>
        } />
      </Routes>

    </BrowserRouter>
  );
}
export default App;
