/*
    Definimos el reducer de contactos con una funsion de JS que recibe los siguientes parametros
    * @param {*} state
    * @param {*} action
*/

export const ContactoReducer = (state, action) => {
    //Toda accion tiene un tipo para lo cual agregamos un switch-case para determinar el tipo de accion
    switch (action.type) {
        case "add":
            return [
                ...state, action.payload
            ] // Payload contiene la nueva informacion a agregar
            //Filtramos el state con todos los datos menos donde coincidan los id´s
        case "delete":
            return state.filter((actual) => actual.id !== action.payload); 

        default:
            return state;
    }
}
