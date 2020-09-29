import Layout from "../components/Layout";
import Link from "next/link";
// import AsignarCliente from "../components/pedidos/asignarCliente";
// import AsignarProductos from "../components/pedidos/AsignarProductos";

const Pedidos = () => (
  <div>
    <Layout>
      <h1 className=" text-2xl text-gray-800 font-light">Pedidos</h1>
      <Link href="nuevopedido">
        <a className="bg-blue-800  py-2 px-5 mt-3 inline-block rounded text-white rounded text-sm hover:bg-gray-600 mb-3 uppercase font-bold">
          Nuevo Pedido
        </a>
      </Link>
    </Layout>
  </div>
);

export default Pedidos;
