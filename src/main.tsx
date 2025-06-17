import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/main.css'


// import { StrictMode } from "react";
// import './assets/main.css';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className='text-red-600'>hello vite and react</h1>

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
