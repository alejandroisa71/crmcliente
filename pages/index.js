import Layout from "../components/Layout";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";
import Cliente from "../components/Cliente";

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

const Index = () => {
  const router = useRouter();

  //Consulta de Apollo
  const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO);
  // console.log(data);
  // console.log(loading);
  // console.log(error);

  if (loading) return "Cargando..";

  if (!data.obtenerClientesVendedor) {
    router.push("/login");
  }
  return (
    <div>
      <Layout>
        <h1 className=" text-2xl text-gray-800 font-light">Clientes</h1>
        <Link href="/nuevocliente">
          <a className="bg-blue-800  py-2 px-5 mt-3 inline-block rounded text-white rounded text-sm hover:bg-gray-600 mb-3 uppercase font-bold w-full lg:w-auto">
            Nuevo Cliente
          </a>
        </Link>
        <div className="overflow-x-scroll">
          <table className="table-auto shadow-md mt-10 w-full w-lg">
            <thead className="bg-gray-800">
              <tr className="text-white">
                <th className="w-1/5 p-2 ">Nombre</th>
                <th className="w-1/5 p-2 ">Empresa</th>
                <th className="w-1/5 p-2 ">Email</th>
                <th className="w-1/5 p-2 ">Eliminar</th>
                <th className="w-1/5 p-2 ">Editar</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.obtenerClientesVendedor.map((cliente) => (
                <Cliente key={cliente.id} cliente={cliente} />
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
