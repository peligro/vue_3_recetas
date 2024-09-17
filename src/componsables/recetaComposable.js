import { readonly, ref } from "vue";


export function recetaComposable(slug)
{
    let dato = ref({});
    let error =ref(null);


    let getDatos= async(slug)=>
    {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}recetas/slug/${slug}`, {headers:{'content-type':'application-json'}});
            if(res.status==404)
            {
                window.location="/error";
            }
            dato.value=await res.json();
        } catch (err) {
            error.value=err;
        }
    };
    getDatos(slug);

    return{
        dato:readonly(dato),
        error:readonly(error),
    }
}