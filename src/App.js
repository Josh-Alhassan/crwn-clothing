import Home from "./routes/home/Home.component";
import {Routes, Route, Outlet} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <h1>I am the Navigation Bar</h1>
      <Outlet />
    </div>
  )
}

// Shop component
const Shop = () => {
  return <h1>I am the Shop page</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home/>} />
        <Route path="Shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
