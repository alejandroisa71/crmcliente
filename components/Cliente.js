import React from "react";
import Swal from "sweetalert2";

const Cliente = ({ cliente }) => {
  const { id, nombre, apellido, empresa, email } = cliente;

  //Eliminar un cliente
  const confirmarEliminarCliente = (id) => {
    Swal.fire({
      title: "Deseas Eliminar a este Cliente?",
      text: "Esta operación no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "No, Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Eliminando", id);
        Swal.fire("Eliminado!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <tr>
      <td className="border px-4 py-2 ">
        {nombre} {apellido}
      </td>
      <td className="border px-4 py-2 ">{empresa}</td>
      <td className="border px-4 py-2 ">{email}</td>
      <td className="border px-4 py-2 ">
        <button
          type="button"
          className="flex justify-center items-center bg-red-800 rounded py-2 px-4 w-full text-white text-xs uppercase font-bold"
          onClick={() => confirmarEliminarCliente(id)}
        >
          Eliminar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
