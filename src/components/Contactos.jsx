import React, { useEffect, useReducer, useState } from "react";
import TablaCotactos from "./TablaContactos";
import FormularioAdd from "./FormularioAdd";
import { ContactoReducer } from "../reducer/ContactosReducer";

/* //Datos de prueba
const contactos = [
  {
    id: "C1",
    nombre: "Sarahi",
    numero: "4778051896",
  },
  {
    id: "C2",
    nombre: "Mariel",
    numero: "4773456788",
  },
]; */

//Definimos la funcion init, donde vamos a poder hacer todo lo necesario
const init = () => {
  //Definimos el localStorge
  const contactos = localStorage.getItem("contactos");
  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  /**
   * Creamos otro useReducer y le pasamos el ContactosReducer y el initial state vacio
   * init: Es una función que va calcular el valor incial de nuestro state
   */
  const [state, dispatch] = useReducer(ContactoReducer, [], init);

  useEffect(() => {
    //Creamos el localStorage
    localStorage.setItem("contactos", JSON.stringify(state));
  });

  //Agregamos un state para determinar si el formulario es visible o no.
  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        className="btn btn-success"
        onClick={() => setFormView(!formView)}
      >
        {!formView ? "+ Agregar Contacto" : "- Cerrar Formulario"}
      </button>
      {/*Pasamos el dispatch del useReducer al formulario*/}
      {formView && <FormularioAdd dispatch={dispatch} />}
      <br />
      {/*Pasamos el state del useReducer con los datos a la tabla y el dispatch */}
      <TablaCotactos contactos={state} dispatch={dispatch} />
    </div>
  );
};

export default Contactos;
