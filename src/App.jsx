import {useState} from 'react'
import './page.css';

export default function App(){

  const [ele,setele]=useState('chowmein');
  const [imag,setimag]=useState('');

  function typer(event){

    setele(event.target.value);
  }

  async function etch(){
      //using js short circuiting in this
    // fetch('https://dog.ceo/api/breeds/image/random').then((res)=>res.json()).then((data)=>setimag(data.message)).catch((err)=>console.log(err));
    let fet=await fetch('https://dog.ceo/api/breeds/image/random');
    let res=await fet.json();

    console.log(res);

    if(res.status==='success'){

      setimag(res.message);
    }
  }

  return (<>
  
  <input type="text" onInput={typer}/>
  <div>{ele}</div>


  {imag && <img src={imag} alt="" className='imaj' />}

  <button onClick={etch}>new button</button>
  </>)
  // return 'hi';
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
