import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";
import { gql, useQuery } from "@apollo/client";
import PedidoContext from "../../context/pedidos/PedidoContext";

const ASIGNAR_PRODUCTOS = gql`
  query obtenerProductos {
    obtenerProductos {
      id
      nombre
      precio
      existencia
    }
  }
`;

const AsignarProductos = () => {
  //State local del Componente
  const [productos, setProductos] = useState([]);

  //Context de Pedidos
  const pedidoContext = useContext(PedidoContext);
  const { agregarProducto } = pedidoContext;

  //Consulta a la BD
  const { data, loading, error } = useQuery(ASIGNAR_PRODUCTOS);

  useEffect(() => {
    //TODO para pasar a pedidosState.js
    agregarProducto(productos);
  }, [productos]);

  const seleccionarProducto = (producto) => {
    // console.log(producto);
    setProductos(producto);
  };

  if (loading) return null;

  const { obtenerProductos } = data;

  return (
    <>
      <p className="mt-10 my2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
        1.- Selecciona o Busca los Productos
      </p>
      <Select
        className="mt-3"
        isMulti={true}
        options={obtenerProductos}
        onChange={(opcion) => seleccionarProducto(opcion)}
        getOptionValue={(opciones) => opciones.id}
        getOptionLabel={(opciones) =>
          `${opciones.nombre} - ${opciones.existencia} Disponibles`
        }
        placeholder="Busque o Seleccione un Producto"
        noOptionsMessage={() => "No hay Resultados"}
      />
    </>
  );
};

export default AsignarProductos;
