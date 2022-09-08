import Home from "./Home";
import Cousine from './Cousine'
import {Route, Routes} from "react-router-dom";

const Pages = () => {
  return (

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cousine/:type" element={<Cousine />} />
      </Routes>
    
  );
};

export default Pages;
