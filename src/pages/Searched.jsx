import {useEffect,useState} from 'react'
import {Link, useParams} from 'react-router-dom'

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async (name) => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${"8f2103ce09034ab49c7af7b36a2233c2"}&query=${name}`
        );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results)
      };

      useEffect(() => {
        getSearched(params.search)
      }, [params.search])
      
      return (
        <div className="grid grid-cols-5 gap-4 ">
          {searchedRecipes.map((item) => {
            return (
              <div key={item.id} className=''>
                <Link to={'/recipe/'+ item.id}>
                <img src={item.image} alt={item.title}  className='rounded-2xl'/>
                <p className="text-center py-2">{item.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      );
  
}

export default Searched