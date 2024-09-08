
export function contactoComposable(body) {
   
  
    
  let sendData = async(body)=>{
   
    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL}contacto`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{'content-type':'application/json'}
    }) 
 
    if(respuesta.status==200)
      {
        alert("Tu mensaje se envió exitosamente. Pronto nos pondremos en contacto contigo!!");
        window.location="/contactanos";
      }
    } catch (err) {
        throw new Error('Request failed');
    }
  }
   

  return {
    sendData 
  };
}