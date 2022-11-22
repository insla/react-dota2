import  {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { lazy, Suspense } from 'react'

const Main = lazy(() => import('../../pages/main/Main'));


function App() {
  return (
    <Router>
      <>
        <Main/>
      </>
    </Router>
  );
}

export default App;
