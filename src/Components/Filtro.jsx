import React from 'react'

const Filtro = ({Filtros, setFiltros}) => {
  return (
    <div className=' text-2xl mt-20'>

      <div className=' container m-auto text-center mb-20'>
               <label 
                  htmlFor="Filtro" 
                  className='mb-3 capitalize m-5 text-white'>
                  Filtro
              </label>
              <select name="Filtro" id="Filtro" className='p-2 rounded-xl  w-96 text-center'
              value={Filtros} onChange={(e) => setFiltros(e.target.value)}>
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
         
    </div>
  )
}

export default Filtro