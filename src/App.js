import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Index from './pages/Index';
import About from './pages/About';
import ImageForm from './pages/ImageForm';
import ImageDetail from './pages/ImageDetail';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="p-4">
      <Navbar/>
        <div className="container p-4">
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/image-form" element={<ImageForm />}/>
            <Route path="/image-detail/:id" element={<ImageDetail/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
