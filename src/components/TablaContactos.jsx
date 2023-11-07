import React from "react";

// Función para calcular la edad
const calcularEdad = (fechaNacimiento) => {
  const today = new Date();
  const birthDate = new Date(fechaNacimiento);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const TablaContactos = ({ contactos = [], dispatch }) => {
  //Definimos el metodo handleDelete
  const handleDelete = (id) => {
    console.log(id);
    //Definimos el action para el delete
    const deleteAction = {
      type: "delete",
      payload: id,
    };
    dispatch(deleteAction);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Número</th>
          <th>Sexo</th>
          <th>Edad</th>
          <th>Imagen</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((contacto) => {
          const finalId = contacto.id.split("-");
          const edad = calcularEdad(contacto.cumpleanos);
          return (
            <tr key={contacto.id}>
              <th>{finalId[0]}</th>
              <th>{contacto.nombre}</th>
              <th>{contacto.numero}</th>
              <th>{contacto.sexo}</th>
              <th>{edad}</th>
              <th>
                <img
                  src={contacto.imagen}
                  alt=""
                  className="img-thumbnail"
                  style={{ maxWidth: "50px", maxHeight: "50px" }}
                />
              </th>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(contacto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TablaContactos;
