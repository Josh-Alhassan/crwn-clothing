import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/navigation.component";
import {Routes, Route} from 'react-router-dom';
import SignIn from "./routes/sign-in/sign-in.component";

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
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
