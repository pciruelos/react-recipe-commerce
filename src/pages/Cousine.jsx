import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cousine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCouisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${"8f2103ce09034ab49c7af7b36a2233c2"}&cuisine=${name}`
    );
    const recipes = await data.json();
    console.log(recipes)
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCouisine(params.type);
  }, [params.type]);

  return (
    <motion.div
     animate={{opacity: 1}}
     initial={{opacity:0}}
     exit={{opacity:0}}
     transition={{duration:1}}
    
    className="grid grid-cols-5 gap-4 ">
      {cuisine.map((item) => {
        return (
          <div key={item.id} className=''>
            <Link to={'/recipe/'+ item.id}>
            <img src={item.image} alt={item.title}  className='rounded-2xl'/>
            <p className="text-center py-2">{item.title}</p>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Cousine;
