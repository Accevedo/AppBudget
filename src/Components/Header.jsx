import React from 'react'
import Form from './Form'
import PanelPresupuesto from './PanelPresupuesto'


const Header = ({presupuesto,
                setpresupuesto,
                ResetApp,
                setisvalid,isValid, 
                setgastos, 
                gastos,
                gasto,
                setgasto,
                setwarning,
                warning}) => {
  return (
    <div>

      {isValid   ?  (
            
            <PanelPresupuesto 
            presupuesto={presupuesto}
            setpresupuesto={setpresupuesto}
            setgastos={setgastos}
            gastos={gastos}
            gasto={gasto}
            setgasto={setgasto}
            ResetApp={ResetApp}
            

            />


           
            
      )
       :
      (
        <Form
        presupuesto={presupuesto}
        setpresupuesto={setpresupuesto}
        setisvalid={setisvalid}
        setwarning={setwarning}
        warning={warning}
        />
          
      )}
        

        
       
    </div>
  )
}

export default Header