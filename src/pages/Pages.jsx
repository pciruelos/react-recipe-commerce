import Home from "./Home";
import Cousine from './Cousine'
import Searched from './Searched'
import {Route, Routes} from "react-router-dom";
import Recipe from "./Recipe";

const Pages = () => {
  return (

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cousine/:type" element={<Cousine />} />
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
        
      </Routes>
    
  );
};

export default Pages;
