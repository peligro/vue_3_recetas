import { ref, readonly } from 'vue';

export function recetaComposable(id) {

  let dato = ref({});
  let error = ref(null);
    

  let getDato = async(id)=>{
    try {
        const res=await fetch(`${import.meta.env.VITE_API_URL}recetas/slug/${id}`, { headers: { 'content-type': 'application/json' } });
        
        dato.value=await res.json() ; 
        if(res.status==404)
        {
          window.location="/error";
        }
    } catch (err) {
        error.value = err;
    }
  }
  
  getDato(id);

  return {
    dato:readonly(dato),
    error:readonly(error)
  };
}