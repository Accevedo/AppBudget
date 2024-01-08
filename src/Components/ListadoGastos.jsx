import Gasto from "./Gasto"
import { generarID } from "../Helper/Index.JS"
const ListadoGastos = ({gastos, setgasto, eliminarGasto, Filtros, arrayFiltros}) => {
  return (
    <div className=" container m-auto">
         {
            Filtros ? (
            <>
                <h2 className=" text-2xl">
                    {arrayFiltros.length > 0  ? "Gastos Filtrados" : "No hay Gastos FIltrados"}</h2>
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
                 <h2>{gastos.length > 0 ? "Gastos" : "No hay gastos" }</h2>
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