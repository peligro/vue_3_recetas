import { readonly, ref } from "vue";
import { useRoute } from "vue-router";

export function recetasComposable() {
    let datos = ref([]);
    let categorias = ref([]);
    let error = ref(null);


    let getDatos = async () => {
        let route = useRoute();
        let url;
        if(route.query.categoria_id)
        {
            url=`${import.meta.env.VITE_API_URL}recetas-buscador?categoria_id=${route.query.categoria_id}&search=${route.query.search}`;
        }else
        {
            url=`${import.meta.env.VITE_API_URL}recetas`;
        }
        try {
            const res = await fetch(url, { headers: { 'content-type': 'application-json' } });
            datos.value = await res.json();
        } catch (err) {
            error.value = err;
        }
    };
    /*
    let getDatos = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}recetas`, { headers: { 'content-type': 'application-json' } });
            datos.value = await res.json();
        } catch (err) {
            error.value = err;
        }
    };
    */
    getDatos();

    let getCategorias = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}categorias`, { headers: { 'content-type': 'application-json' } });
            categorias.value = await res.json();
        } catch (err) {
            error.value = err;
        }
    };
    getCategorias();
    return {
        datos: readonly(datos),
        error: readonly(error),
        categorias: readonly(categorias)
    }
}