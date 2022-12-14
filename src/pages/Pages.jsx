import Home from "./Home";
import Cousine from './Cousine'
import Searched from './Searched'
import {Route, Routes, useLocation} from "react-router-dom";
import Recipe from "./Recipe";
import {AnimatePresence} from 'framer-motion'

const Pages = () => {
  const location = useLocation();
  return (

    <AnimatePresence exitBeforeEnter>

      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/cousine/:type" element={<Cousine />} />
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
        
      </Routes>
    </AnimatePresence>
    
  );
};

export default Pages;
