import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');
    if (check) {
        setPopular(JSON.parse(check))
    } else {

        const response = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${"8f2103ce09034ab49c7af7b36a2233c2"}&number=12`
          );
          const data = await response.json();
          localStorage.setItem('popular', JSON.stringify(data.recipes))
          setPopular(data.recipes);
          console.log(popular);
    }

  };

  return (
    <div>
        <h3 className="font-xl"> Our Popular picks</h3>
        <div className="">
      <Splide options={{
        perPage:4,
        arrows:false,
        pagination:false,
        drag:'free',
        gap:'2rem'
      }}>
            {popular.map((recipe) => {
                return (
                  <SplideSlide  key={recipe.id}>
              <Link to={'/recipe/'+ recipe.id}>
              <div
                 
                 className="my-2 mx-2 min-h-[100px] rounded overflow-hidden relative"
               >
                 <p className="absolute text-xl top-5 left-5">{recipe.title}</p>
                 <img src={recipe.image} alt={recipe.title} className='rounded' />
               </div>
              </Link>
          </SplideSlide>
              );
            })}
            </Splide>
        </div>
    </div>
  );
};

export default Popular;
