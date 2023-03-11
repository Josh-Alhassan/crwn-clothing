import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/navigation.component";
import {Routes, Route} from 'react-router-dom';
import Authentication from "./routes/authentication/authentication.component";
// import Authentication from "./routes/authentication/authentication";

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
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
