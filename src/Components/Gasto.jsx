
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { DateFomater } from '../Helper/Index.JS'
import Casa from '../IMG/icons8-casa-80.png'
import Salud from '../IMG/icons8-confianza-80.png'
import UsoLibre from  '../IMG/icons8-suite-de-ala-80.png'
import PlataformaDigital from '../IMG/icons8-música-de-youtube-80.png'
import Comida from '../IMG/icons8-comida-80.png'
import GastosMensuales from '../IMG/icons8-deuda-80.png' 
import Vet from  '../IMG/icons8-carrier-80.png' 
const Gasto = ({gasto, eliminarGasto}) => {

    const {Nombre, Cantidad, Categoria, ID} = gasto
    

    
    

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => setgasto(gasto)}>
            Editando
          </SwipeAction>
        </LeadingActions>
      );


      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            onClick={() => eliminarGasto(ID) }
            destructive={true}
          >
            Delete
          </SwipeAction>
        </TrailingActions>
      );

  const imagenesIconos =  {
     Casa : Casa,
     Salud : Salud,
     UsoLibre : UsoLibre,
     PlataformaDigital : PlataformaDigital,
     Comida : Comida,
     GastosMensuales : GastosMensuales,
     Vet : Vet
     
  }

  return (
    <div>
        <SwipeableList>
  <SwipeableListItem
    leadingActions={leadingActions()}
    trailingActions={trailingActions()}
  >
       <div className='flex justify-between gap-9 mt-11 pb-5 w-1/2 m-auto'>
            <div className='flexboxPapa flex gap-9 content-center'>
                <img src={imagenesIconos[Categoria]} alt="" />
                <div className='  klk'>
                    <p className=' text-white font-bold text-xl capitalize mb-3 '>{Categoria}</p>
                    <p className=' text-white mb-3  '>{Nombre}</p>
                    <p className=' text-white '>{DateFomater()}</p>
                </div>
            </div>
                  <p className=' font-bold text-white text-xl mr-10'>${Cantidad}</p>      
          </div>
  </SwipeableListItem>
</SwipeableList>;
    </div>
  )
}

export default Gasto