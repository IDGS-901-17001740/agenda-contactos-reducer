import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

//https://www.npmjs.com/package/uuid

const FormularioAdd = ({ dispatch }) => {
  // Agregamos un useState
  const [data, setData] = useState({
    nombre: "",
    numero: "",
    sexo: "",
    cumpleanos: "",
    imagen: "",
  });

  //Desestruccturando el state
  const { nombre, numero, sexo, cumpleanos, imagen } = data;

  /* //Agregamos un método handleChange
  const handleChange = (e) => {
    //Modificamos el state
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  }; */

  const actionAdd = {
    type: "add",
    payload: { id: uuid(), nombre, numero, sexo, cumpleanos, imagen },
  };

  const handleAdd = (e) => {
    //Invocamos al dispatch, todos los dispatch tienen referencia
    //directa con el reducer a ejecutar
    //Modificamos el state
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    dispatch(actionAdd);

    //Limpiar los campos
    setData({ nombre: "", numero: "", sexo: "", cumpleanos: "", imagen: "" });
  };

  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(handleAdd)}>
      <div className="container">
        <label htmlFor="" className="mx-1 d-grid gap-2">
          Nombre: {""}
          <input type="text" className="form-control" {...register("nombre")} />
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
          Número: {""}
          <input type="text" className="form-control" {...register("numero")} />
        </label>
        <label htmlFor="" className="mx-1 d-grid gap-2">
          Fecha de cumpleaños: {""}
          <input
            type="date"
            className="form-control"
            {...register("cumpleanos")}
          />
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
