import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/main.css'
import Routing from './config/router.config'


// import { StrictMode } from "react";
// import './assets/main.css';

import "react-quill/dist/quill.snow.css";
// import "jsvectormap/dist/css/jsvectormap.css";
import "react-toastify/dist/ReactToastify.css";
import "react-modal-video/css/modal-video.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <h1 className='text-red-600'>hello vite and react</h1> */}
    <Routing />

  </StrictMode>,
)

// let rootElement=document.getElementById('root')!;
// let reactDom=createRoot(rootElement)

// reactDom.render("Hello world")


//component


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>

//   </StrictMode>
// )
