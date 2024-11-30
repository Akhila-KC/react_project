
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Homepage from './pages/home'
import Aboutpage from './pages/about'
import Menupage from './pages/menu'
import Contactpage from './pages/contact'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='about' element={<Aboutpage/>}/>
        <Route path='menu' element={<Menupage/>}/>
        <Route path='contact' element={<Contactpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
