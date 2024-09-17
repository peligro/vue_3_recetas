import { defineStore } from "pinia";


export const useAuthStore = defineStore('auth',
    {
        state: () => ({
            authId: (localStorage.getItem('recetas_flaites_id')!=null) ? localStorage.getItem('recetas_flaites_id'): null,
            authNombre:(localStorage.getItem('recetas_flaites_nombre')!=null) ? localStorage.getItem('recetas_flaites_nombre'): null,
            authToken:(localStorage.getItem('recetas_flaites_token')!=null) ? localStorage.getItem('recetas_flaites_token'): null,
        }),
        actions:
        {
            iniciarSesion(data)
            {
                localStorage.setItem('recetas_flaites_id', data.id);
                localStorage.setItem('recetas_flaites_nombre', data.nombre);
                localStorage.setItem('recetas_flaites_token', data.token);
            },
            estasLogueado()
            {
                if(this.authId==null)
                {
                    window.location="/login";
                }
                this.authId= localStorage.getItem('recetas_flaites_id');
                this.authNombre= localStorage.getItem('recetas_flaites_nombre');
                this.authToken= localStorage.getItem('recetas_flaites_token');
            },
            cerrarSesion()
            {
                if(window.confirm("¿Realmente desea cerrar la sesión?"))
                {
                    localStorage.clear();
                    window.location="/login";
                }
            },
        }
    });