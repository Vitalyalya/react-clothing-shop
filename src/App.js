import { Routes, Route } from "react-router-dom";

import Navigation from "./components/routs/navigation/navigation.component";
import Home from "./components/routs/home/home.component";
import Authentication from "./components/routs/authentication/authentication.component";

const Shop = () => {
  return <h1>I am a Shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
