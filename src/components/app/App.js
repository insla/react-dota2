import  {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { lazy, Suspense } from 'react'
import Layout from "../layout/Layout";
import Spinner from "../spinner/Spinner";

const Main = lazy(() => import('../../pages/main/Main'));
const Teams = lazy(() => import('../../pages/teams/Teams'));
const Matches = lazy(() => import('../../pages/matches/Matches'));
const Details = lazy(() => import ('../../pages/details/Details'));


function App() {
  return (
    <Router>
      <div className="app">
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route element={<Layout/>}>
              <Route path="/teams" element={<Teams/>}/>
              <Route path="/matches" element={<Matches/>}/>
              <Route path="/details" element={<Details/>}/>
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
