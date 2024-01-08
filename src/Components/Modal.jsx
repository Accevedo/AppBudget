import { useState, useEffect } from "react";
import Warning from "./Warning";
import  close from "../IMG/icons8-eliminar-60.png"


const Modal = ({setmodal, gasto, setgasto, AgregarGasto, warning, setwarning}) => {
  
        const [Nombre, setNombre] = useState("")    
        const [Cantidad, setCantidad] = useState(0);
        const [Categoria, setCategoria] = useState("")
        const [ID, setID] = useState("")
        const [Fecha, setFecha] = useState("")



        useEffect(() => {

            if(Object.keys(gasto).length > 0){
               setNombre(gasto.Nombre),
               setCantidad(gasto.Cantidad),
               setCategoria(gasto.Categoria)
               setID(gasto.ID)
               setFecha(gasto.Fecha)
             
            }
        
          }, [gasto])
      

    const HandleGastos = (e) => {
       
        e.preventDefault();

        if([Nombre, Cantidad,Categoria].includes("")){
            setwarning(true);
            return
        }

        setwarning(false)

        
        const misGastos = {
            Nombre : Nombre,
            Cantidad : Cantidad,
            Categoria : Categoria,
            ID:ID,
            Fecha:Fecha
        }

     
        
        AgregarGasto(misGastos)
        setgasto({})


        setTimeout(() => {
            setmodal(false)
        }, 1000);

    }

    const CloseModal = () => {
        setmodal(false);

        setgasto({})
    }

  return (
    <div>
        
        <div className='containrer mx-auto  text-center relative'>
            <form 
                action="" 
                className=' fixed top-0 left-0 right-0 h-screen bg-black border-2' 
                onSubmit={HandleGastos}
            >
            <img src={close}  className=" fixed top-0 right-16 mt-3 cursor-pointer" 
            alt="" 
            onClick={CloseModal}/>
            <h3 
                className=' text-white border-b-2 border-orange-500 text-4xl pb-5 w-96 m-auto mt-10 mb-5'>
                {Object.keys(gasto).length > 0 ? "Editar Gasto" : "Nuevo Gasto"}
            </h3>
                <div className='mb-5'>  
                    <label 
                        htmlFor="Nombre" 
                        className=' text-white block mb-3 capitalize'>
                        Nombre del gasto
                    </label>
                    <input 
                        type="text" 
                        name="Nombre" 
                        id="Nombre" 
                        className='p-2 rounded-xl  w-96'
                        value={Nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div>
                <div className='mb-5'>
                    <label 
                        htmlFor="Cantidad" 
                        className=' text-white block mb-3 capitalize'>
                        Cantidad del Gasto
                    </label>
                    <input 
                        type="number" 
                        name="Cantidad" 
                        id="Cantidad" 
                        className='p-2 rounded-xl  w-96'
                        value={Cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='mb-5'>
                    <label 
                        htmlFor="Categorias" 
                        className=' text-white block mb-3 capitalize'>
                        Categorias
                    </label>
                    <select name="Categorias" id="Categorias" className='p-2 rounded-xl  w-96 text-center'
                    onChange={e => setCategoria(e.target.value)} value={Categoria}>
                            <option value="">Selecciona una categoria</option>
                            <option value="GastosMensuales">Gastos Mensuales</option>
                            <option value="Vet">Veterinario</option>
                            <option value="Salud">Salud</option>
                            <option value="Comida">Comida</option>
                            <option value="Casa">Casa</option>
                            <option value="UsoLibre">Uso Libre</option>
                            <option value="PlataformaDigital">Plataformas Digitales</option>
                    </select>
                </div>
                        <input 
                        type="submit" 
                        className=' text-white bg-orange-500 font-bold p-3 w-96 rounded-xl cursor-pointer' 
                        value={Object.keys(gasto).length > 0 ? "Editar Gasto" : "Agregar Gasto"} 
                        />
                </div>
                {warning && <Warning>Debe llenar todos los campos</Warning>}
                
            </form>
        </div>
    </div>
  )
}

export default Modal