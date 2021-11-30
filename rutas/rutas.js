//function para gestionar las rutas del proyecto
// necesita el objeto express para crear los endpoint
//endpoint:  ruta REST que expone colecciones/singleton/resultados operacion EN FORMATO JSON  
import { addPersona, getPersona, getPersonaById, updatePersona, deletePersona } from "../controladores/personaController.js"


const rutas = (app) => {
    app.route('/personas')
        .get( getPersona )
        .post( addPersona )

    app.route('/personas/:personaid')
        .get(getPersonaById)
        .put(updatePersona)
        .delete(deletePersona)
}

export default rutas