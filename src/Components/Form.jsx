
import Warning from "./Warning"

const Form = ({presupuesto, setpresupuesto,setisvalid, setwarning, warning}) => {

  
    const HandleForm = e => {
        e.preventDefault();

        //console.log(typeof presupuesto)

        if(presupuesto <= 0 ){
            console.log("no valido")
            setwarning(true)
            setisvalid(false)
            return;
        }
          
          setisvalid(true)
          setwarning(false)
    }

  return (
    <div className='container'>
        <form action="" className='responisveForm' onSubmit={HandleForm}>
            <div className=' text-center '>
            <label htmlFor="Presupuesto"
                className='block text-5xl mb-5 LabelForm mt-44 text-orange-500 font-bold'>
                Definir Presupuesto
             </label>
            <input type="number" 
             className='py-3 px-3 w-96 rounded-xl'
             value={presupuesto}
             onChange={ e => setpresupuesto(Number(e.target.value))}
            />
            </div>
            <div className=' text-center mt-5'>
                <input type="submit" value="Add" 
                 className=' bg-orange-500 w-96 rounded-xl p-2 cursor-pointer text-white font-bold capitalize'
                />
                {warning && <Warning>Prespuesto no valido</Warning> }
                
            </div>
        </form>
    </div>
  )
}

export default Form