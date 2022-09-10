import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState('')

    const inputHandler = (e) => {
        setInput(e.target.value)
        navigate('/searched/'+input)
    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
    <form className='w-[60%] mx-auto my-5 relative' onSubmit={submitHandler}>
        <FaSearch className='absolute top-8 left-5 text-black'/>
        <input onChange={inputHandler} value={input} type="text" className='w-[100%] bg-white my-5 text-black rounded mx-auto px-12 py-2' />
    </form>
  )
}

export default Search