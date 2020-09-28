import React, { useState, useEffect } from "react";
import Select from "react-select";
import { gql, useQuery } from "@apollo/client";

const OBTENER_CLIENTES_USUARIO = gql`
  query obtenerClientesVendedor {
    obtenerClientesVendedor {
      id
      nombre
      apellido
      empresa
      email
    }
  }
`;

const AsignarCliente = () => {
  const [cliente, setCliente] = useState([]);

  //Consultar la BD

  const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO);

  //   console.log(data);
  //   console.log(loading);
  //   console.log(error);

  //Resultados de la consulta
  if (loading) return null;

  const { obtenerClientesVendedor } = data;

  useEffect(() => {
    console.log(cliente);
  }, [cliente]);

  const seleccionarCliente = (clientes) => {
    setCliente(clientes);
  };
  return (
    <>
      <p className="mt-10 my2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
        1.- Asigna un Cliente al Pedido
      </p>
      <Select
        className="mt-3"
        options={obtenerClientesVendedor}
        onChange={(opcion) => seleccionarCliente(opcion)}
        getOptionValue={(opciones) => opciones.id}
        getOptionLabel={(opciones) => opciones.nombre}
        placeholder="Busque o Seleccione un Cliente"
        noOptionsMessage={() => "No hay Resultados"}
      />
    </>
  );
};

export default AsignarCliente;
