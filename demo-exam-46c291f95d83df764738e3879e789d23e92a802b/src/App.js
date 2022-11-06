import { Routes, Route, Navigate} from "react-router-dom"

// styles
import "./App.css"
import NotFound from "./pages/404/NotFound";
// pages and components
import Repository from "./pages/repository/Repository";
import Search from "./pages/search/Search"

// pages and components

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Search />} />
        <Route path="home" element={<Navigate to="/search" />} />
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="*" element={<NotFound />} />

        <Route>
          <Route index element={<Search />} />
          <Route path='/search' element={<Search />} />
          <Route path='repository/:name/:id' element={<Repository />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
  
}
export default App;