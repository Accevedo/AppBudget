 const formatearPresupuesto = (x)=>{
  const form = x.toLocaleString('es-DO', {
     style:'currency',
     currency:'DOP'
   })

   return form
}

const DateFomater = () => {
  const option =  {weekday : 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const date =  new Date();
  const DayDebts =  date.toLocaleDateString('es-DO', option);
  return DayDebts;

}


const generarID = ()=>{
  
   const ramdon =  (Math.random()*1000).toString(36).slice(3)
 
 const fecha =  Date.now().toString(36)
 
 return ramdon + fecha 
       
 }


 

export{

   formatearPresupuesto,
   generarID,
   DateFomater

} 



