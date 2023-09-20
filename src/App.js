import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/Navbar';
import Header from './components/Header/Header';

import CustomCursor from './CustomCursor';
import Featured from './components/Featured/Featured';
import About from './components/About/About';
import Projects from './components/Projects/Projects';



import './App.css';
import Footer from './components/Footer/Footer';
import { useEffect, useRef, useState } from 'react';
import useLocoScroll from './Hooks/useLocoScroll';
function App() {
  const ref = useRef();
  const [preLoader, setPreLoader] = useState(true);

  useLocoScroll(!preLoader);
  useEffect(() => {
    if (!preLoader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preLoader]);

  const [timer, setTimer] = useState(1);

  const id = useRef(null);

  const clear= () => {
    window.clearInterval(id.current)
    setPreLoader(false)
  }

  useEffect(()=>{
      id.current = window.setInterval(() =>{
          setTimer(time => time-1)
      },1000)
  },[])
  useEffect(()=>{
if(timer === 0){
  clear();
}
  },[timer])

  if (typeof window === "undefined" || !window.document) {
    return null;
  }


  return (
    <>
    <CustomCursor/>

    {/* {preLoader? (
    <div className='loader-wrapper absolute d-flex  align-items-center  justify-content-center'>
      <span className='ball'></span>
      <div className="text text-center">
      <h1>Lanre-Abass</h1>
      <h2>Software  Developer</h2>
</div>
    </div> )
     : ( */}


      <div className="main-container" id="main-container" data-scroll-container ref={ref} >
      
      <Navbar/>
      <Header/>
      <Featured/>
      <About/>
      <Projects/>
      <Footer/>

    </div>
   )} </>
  );
}

export default App;
