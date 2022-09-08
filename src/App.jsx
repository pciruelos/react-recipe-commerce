import Pages from "./pages/PAges";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="w-[80%] mx-auto text-white font-bold">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
