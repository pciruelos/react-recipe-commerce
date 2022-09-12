import Pages from "./pages/PAges";
import Category from "./components/Category";
import {BrowserRouter, Link} from 'react-router-dom'
import Search from "./components/Search";
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  return (
    <div className="w-[80%] mx-auto text-white font-bold">
      <BrowserRouter>
      <div className="flex my-10 items-center">
        <GiKnifeFork size={25}/>
        <Link to={'/'} className='text-xl px-2'>Delicisoooooo</Link>
      </div>
        <Search/>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
