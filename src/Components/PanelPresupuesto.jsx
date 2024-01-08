import { CircularProgressbar,  buildStyles } from 'react-circular-progressbar';
import { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
 import {formatearPresupuesto} from '../Helper/Index.JS'
    

const   PanelPresupuesto = ({presupuesto,gastos,ResetApp}) => {
const [Gastado, setGastado] = useState(0);
const [Disponible, setDisponible] = useState(0);
 
useEffect(()=> {

        const totalGastado =  gastos.reduce((total, debts) => total + debts.Cantidad, 0)
        setGastado(totalGastado)

        const miDisponible =  presupuesto - totalGastado;

        setDisponible(miDisponible)


}, [gastos])



    

  return (
    <>
        <div className='container mx-auto flex justify-center flex-wrap mt-5'>
            <div className=' mr-20' style={{width:230, height: 230 }}>
                <CircularProgressbar 
                    value={(Disponible/presupuesto) * 100}
                    text={`${((Disponible/presupuesto) * 100).toFixed(2)}%`}

                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,
                    
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                    
                        // Text size
                        textSize: '16px',
                    
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 4,

                        //With
                        
                    
                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',
                    
                        // Colors
                        pathColor: `#FF4C05`,
                        textColor: '#FF4C05',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                />
            </div>

            <div className=''  style={{width:308, height: 217 }}>
                <button 
                onClick={ResetApp}
                className=' bg-orange-400 text-white mt-10 p-2 w-full text-xl font-bold rounded-xl mb-3 hover:bg-red-500'>
                Restablcer App 
                </button>
               
                <p 
                    className=' text-slate-100 font-bold text-2xl mb-5'>
                   {" "} Presupuesto:{formatearPresupuesto(presupuesto)}
                </p>
                <p 
                    className=' text-orange-100 font-bold text-2xl mb-5'>
                    Disponible:{formatearPresupuesto(Disponible)}
                </p>
                <p 
                   className=' text-orange-100 font-bold text-2xl mb-5'>
                    Gastado:{formatearPresupuesto(Gastado)}
                </p>
            </div>
        </div>
    </>
  )
}

export default PanelPresupuesto