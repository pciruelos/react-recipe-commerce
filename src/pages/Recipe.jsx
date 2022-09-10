import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'

const Recipe = () => {
    const [details, setDetails] = useState({})
    const [activetab, setActivetab] = useState('instrucciones')

    let params = useParams()

    const fetchedDetails = async () => {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${"8f2103ce09034ab49c7af7b36a2233c2"}`
        );
        const recipe = await data.json();
        setDetails(recipe)
      };

      useEffect(() => {
        fetchedDetails()
      }, [params.name])



  return (
    <div className='mt-10 mb-5 flex '>
        <div>
            <h2 className='m-2'>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <div>
            <button onClick={()=> setActivetab('intrucciones')} className={activetab === 'instrucciones' ? 'bg-black px-4 py-2 text-white m-2' : 'bg-white px-4 py-2 text-black m-2'}>Intrucctions</button>
            <button onClick={()=> setActivetab('ingrdients')} className={activetab === 'ingredientes' ? 'bg-black px-4 py-2 text-white m-2' : 'bg-white px-4 py-2 text-black m-2'}>ingredients</button>
        </div>
    </div>
  )
}

export default Recipe