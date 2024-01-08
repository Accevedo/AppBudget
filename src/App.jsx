import { useState, useEffect } from 'react'
import Header from './Components/Header'
import ListadoGastos from './Components/ListadoGastos'
import Modal from './Components/Modal'
import Filtro from './Components/Filtro'
import add from '../src/IMG/add.png'
import {generarID, DateFomater} from  './Helper/Index.JS'



function App() {
  const [presupuesto, setpresupuesto] = useState(

    
      JSON.parse(localStorage.getItem("presupuesto")) ?? 0 


  )
  const [Filtros, setFiltros]=  useState("");
  const [arrayFiltros, setarrayFiltros]= useState([])
  const [isValid, setisvalid] = useState(false);
  const [modal, setmodal] = useState(false);
  const [gastos, setgastos] = useState(

    JSON.parse(localStorage.getItem("Gastos")) ?? []
  );
  const [gasto, setgasto] =  useState({});
  const [warning, setwarning] = useState(false)


  useEffect(()=>{
      if(Filtros){
         const gastoFIltrado =  gastos.filter(gasto => gasto.Categoria === Filtros)

         setarrayFiltros(gastoFIltrado);
      }

  }, [Filtros])

 
  useEffect(()=>{

  

       localStorage.setItem("Gastos", JSON.stringify(gastos) ?? [])
        

  }, [gastos])

  useEffect(()=>{

  

     localStorage.setItem("presupuesto", JSON.stringify(presupuesto) ?? 0) 
     

}, [presupuesto])


useEffect(()=> {

  if(presupuesto > 0 ){
     setisvalid(true);
  }

}, [])


const ResetApp =  ()=>{
    setpresupuesto(0);
    setgastos([]);
    setisvalid(false)
}
  
  
  const eliminarGasto = (ID) => {
        
    console.log(`Borrando el ID ${ID}`);


        const deleteID = gastos.filter(DelID => DelID.ID !== ID );

        //console.log(deleteID)

         setgastos(deleteID);
  }


  const hanleNuevoPresupuesto = ()=> {
      setTimeout(() => {
        setmodal(true)
      }, 100);
  }


  useEffect(() => {

      if(Object.keys(gasto).length > 0){

          setmodal(true)


           const abrirModalParaActualizar =  gastos.map(update => update.ID === gasto.ID ? gasto : update)

           setgastos(abrirModalParaActualizar)
          
      }
  }, [gasto])

  function AgregarGasto(gasto) {

      if(gasto.ID){

        const Editar =  gastos.map(update => update.ID === gasto.ID ? gasto : update);

        setgastos(Editar)

        console.log(Editar)
        
      }else{

        gasto.ID =  generarID()
        gasto.Fecha = DateFomater()
        setgastos([...gastos, gasto])

      }

     
  }


 


  return (
    
    <div className='appImage'>
       <Header
       presupuesto={presupuesto}
       setpresupuesto={setpresupuesto}
       isValid={isValid}
       setisvalid={setisvalid}
       gastos={gastos}
       setgastos={setgastos}
       gasto={gasto}
       setgasto={setgasto}
       warning={warning}
       setwarning={setwarning}
       ResetApp={ResetApp}
      

       />
    {isValid && (
      
      <div>

             
              <main>
              {gastos.length > 0 ? 
              
              
              <Filtro
              Filtros={Filtros}
              setFiltros={setFiltros}
             /> 
             
             : ""}

                
                <ListadoGastos
                gastos={gastos}
                setgastos={setgastos}
                setgasto={setgasto}
                gasto={gasto}
                eliminarGasto={eliminarGasto}
                setarrayFiltros={setarrayFiltros}
                arrayFiltros={arrayFiltros}
                Filtros={Filtros}

                />
              </main> 

              <div className='relative'>
                  <img 
                  className='addIMG w-14 fixed bottom-11 right-10 cursor-pointer' 
                  src={add} alt="Boton de agrgar"
                  onClick={hanleNuevoPresupuesto}
                  />

                    
              </div>
        </div>
       

       )}

      
      

        {modal && 
        
          <Modal
            modal={modal}
            setmodal={setmodal}
            gastos={gastos}
            setgastos={setgastos}
            gasto={gasto}
            setgasto={setgasto}
            AgregarGasto={AgregarGasto}
            warning={warning}
            setwarning={setwarning}
          />
        }

       
    
    </div>
  )
}

export default App
