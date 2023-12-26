
import { useState } from 'react';
import logo from "./img/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-picture-image_3180467.jpg"


function App() {
  const [contenido, setContenido] = useState("");
  const estilo1= {backgroundColor:"red"};
  const estilo2= {backgroundColor:"yellow"};
  const estilo3= {backgroundColor:"green"};


  const [colores, setColores] = useState(estilo2);

  

  const texto=()=> {
    setColores(estilo1);
    setContenido("STOP");
  }
  const img=()=> {  
    setColores(estilo2);
    setContenido("WAIT");

  }

  const back=()=> {
    setColores(estilo3);
    setContenido("RUN");
  }
  return (
    <>
    <div className="App">
      <button onClick={()=>{texto()}}>STOP</button>
      <button onClick={()=>{img()}}>WAIT</button>
      <button onClick={()=>{back()}}>RUN</button>
      
      <div className='trafficlights' style={colores}>
        {contenido}
      </div>
    </div>
    
    <div>
     
    </div>

    </>
    
  );
}

export default App;
