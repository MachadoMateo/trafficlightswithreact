
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
      <button onClick={()=>{texto()}}>Click Here</button>
      <button onClick={()=>{img()}}>button 2</button>
      <button onClick={()=>{back()}}>button 3</button>
      
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
