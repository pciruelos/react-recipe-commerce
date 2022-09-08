import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'

const Category = () => {
  return (
    <div className='flex justify-around items-center w-[60%] mx-auto my-10 text-center'>
        <NavLink to={'/cousine/italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cousine/american'}>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cousine/thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/cousine/japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </NavLink>
     
    </div>
  )
}

export default Category