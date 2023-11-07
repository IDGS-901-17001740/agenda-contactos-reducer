import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

//https://www.npmjs.com/package/uuid

const FormularioAdd = ({ dispatch }) => {
  // Agregamos un useState
  /* const [data, setData] = useState({
    nombre: "",
    numero: "",
    sexo: "",
    cumpleanos: "",
    imagen: "",
  }); */

  //Desestruccturando el state
  //const { nombre, numero, sexo, cumpleanos, imagen } = data;

  /* //Agregamos un método handleChange
  const handleChange = (e) => {
    //Modificamos el state
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  }; */

  /* const actionAdd = {
    type: "add",
    payload: { id: uuid(), nombre, numero, sexo, cumpleanos, imagen },
  };

  const handleAdd = (e) => {
    //Invocamos al dispatch, todos los dispatch tienen referencia
    //directa con el reducer a ejecutar
    //Modificamos el state
    console.log(e);
    setData(e);
    dispatch(actionAdd);

    //Limpiar los campos
    setData({ nombre: "", numero: "", sexo: "", cumpleanos: "", imagen: "" });
  }; */

  const { register, handleSubmit, reset, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    const actionAdd = {
      type: "add",
      payload: { id: uuid(), ...data },
    };

    // Invocamos al dispatch para agregar el nuevo elemento
    dispatch(actionAdd);

    // Limpiamos los campos del formulario
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <label htmlFor="" className="mx-1 d-grid gap-2">
          Nombre: {""}
          <input type="text" className="form-control" {...register("nombre", {
            required: true
          })} />
          {errors.nombre?.type === 'required'&& 
          <div class="alert alert-danger" role="alert">
          El campo nombre es requerido
        </div>}
        </label>
        <label htmlFor="" className="mx-1 d-grid gap-2">
          Sexo: {""}
          <select className="form-control" {...register("sexo")}>
            <option value="">Seleccionar</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
          </select>
        </label>
        <label htmlFor="" className="mx-1 d-grid gap-2">
          Teléfono: {""}
          <input type="text" className="form-control" {...register("numero", {
            required: true,
            minLength: 10
          })} />
          {errors.numero?.type === 'required' && 
          <div class="alert alert-danger" role="alert">
          El campo teléfono es requerido
        </div>}
        {errors.numero?.type === 'minLength' && <div class="alert alert-danger" role="alert">
          El teléfono debe ser de 10 digitos
        </div>}
        </label>
        <label htmlFor="" className="mx-1 d-grid gap-2">
          Fecha de cumpleaños: {""}
          <input
            type="date"
            className="form-control"
            {...register("cumpleanos", {
              required: true
            })}
          />
          {errors.cumpleanos?.type === 'required'  && <div class="alert alert-danger" role="alert">
          Ingresa una fecha de cumpleaños valida
        </div>}
        </label>
        <label htmlFor="" className="mx-1 d-grid gap-2">
          Imagen: {""}
          <input type="text" className="form-control" {...register("imagen")} />
        </label>
        <div className="mx-1 d-grid gap-2">
          <button className="btn btn-info mt-2">Agregar</button>
        </div>
      </div>
    </form>
  );
};

export default FormularioAdd;
