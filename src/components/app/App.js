import  {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { lazy, Suspense } from 'react'
import Layout from "../layout/Layout";

const Main = lazy(() => import('../../pages/main/Main'));
const Teams = lazy(() => import('../../pages/teams/Teams'));


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route element={<Layout/>}>
          <Route path="/teams" element={<Teams/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
