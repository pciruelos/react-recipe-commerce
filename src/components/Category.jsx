import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'

const Category = () => {
  return (
    <div className='flex justify-around items-center w-[60%] mx-auto my-5 text-center'>
        <NavLink to={'/cousine/italian'}>
            <div className='flex flex-col justify-around items-center text-center'>
            <FaPizzaSlice/>
            <h4>Italian</h4>
            </div>
        </NavLink>
        <NavLink to={'/cousine/american'}>
        <div className='flex flex-col justify-around items-center text-center'>
            <FaHamburger/>
            <h4>American</h4>
            </div>
        </NavLink>
        <NavLink to={'/cousine/thai'}>
        <div className='flex flex-col justify-around items-center text-center'>
            <GiNoodles/>
            <h4>Thai</h4>
            </div>
        </NavLink>
        <NavLink to={'/cousine/japanese'}>
        <div className='flex flex-col justify-around items-center text-center'>
            <GiChopsticks/>
            <h4>Japanese</h4>
            </div>
        </NavLink>
     
    </div>
  )
}

export default Category