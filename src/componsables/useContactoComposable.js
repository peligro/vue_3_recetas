export function useContactoComposable(body)
{
   
    let sendData=async(body)=>{
        try {
            let respuesta = await fetch(`${import.meta.env.VITE_API_URL}contacto`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers:{'content-type':"application/json"}
            });
            if(respuesta.status==200)
            {
                alert("Tu mensaje se envió exitosamente. Pronto nos pondremos en contacto contigo!!!");
                window.location=location.href;
            } 
        } catch (error) {
            throw new Error("Error de envío");
        }
        
    };

    return{
        sendData
    };
    
}