import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Veggie = () => {

    const [veggie, setVeggie] = useState([]);
    useEffect(() => {
      getVeggie();
    }, []);
  
    const getVeggie = async () => {
      const check = localStorage.getItem('veggie');
      if (check) {
          setVeggie(JSON.parse(check))
      } else {
  
          const response = await fetch(
              `https://api.spoonacular.com/recipes/random?apiKey=${"8f2103ce09034ab49c7af7b36a2233c2"}&number=9&tags=vegetarian?`
            );
            const data = await response.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes);
            
      }
    }


  return (
    <div className="my-10">
        <h3 className="font-xl"> Our Vegetarian picks</h3>
        <div className="">
      <Splide options={{
        perPage:3,
        arrows:false,
        pagination:false,
        drag:'free',
        gap:'4rem'
      }}>
            {veggie.map((recipe) => {
                return (
                  <SplideSlide key={recipe.id}>
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
  )
}

export default Veggie