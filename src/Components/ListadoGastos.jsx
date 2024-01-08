import Gasto from "./Gasto"
import { generarID } from "../Helper/Index.JS"
const ListadoGastos = ({gastos, setgasto, eliminarGasto, Filtros, arrayFiltros}) => {
  return (
    <div className=" container m-auto">
         {
            Filtros ? (
            <>
                <h2 className="text-3xl text-orange-500 text-center capitalize font-bold">
                    {arrayFiltros.length > 0  ? "Gastos Filtrados" : "No hay gastos de esta categoria"}</h2>
                    {arrayFiltros.map(gasto => {
                        return (
                            <Gasto
                              key={gasto.ID}
                              gasto={gasto}
                              setgasto={setgasto}
                              eliminarGasto={eliminarGasto}
                            />
                        )
                    })}

            </>

             ) : (

            <>
                 <h2 
                 className=" text-3xl text-orange-500 text-center capitalize font-bold mt-10">
                  {gastos.length > 0 ? "Gastos" : "No hay gastos" }</h2>
                {gastos.map(gasto => {
                    return(
                    <Gasto
                    key={gasto.ID}
                    gasto = {gasto}
                    setgasto = {setgasto}
                    EliminarID = {eliminarGasto}

                    />
        )

      })}
            
            </>


             )            


         }
        
    </div>
  )
}

export default ListadoGastos