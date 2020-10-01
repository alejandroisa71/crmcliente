import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { gql, useQuery } from "@apollo/client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MEJORES_VENDEDORES = gql`
  query mejoresVendedores {
    mejoresVendedores {
      vendedor {
        nombre
        email
      }
      total
    }
  }
`;

const MejoresVendedores = () => {
  const { data, loading, error, startPolling, stopPolling } = useQuery(
    MEJORES_VENDEDORES
  );

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, startPolling]);

  if (loading) return "Cargando";

  //   console.log(data);

  const { mejoresVendedores } = data;

  const vendedorGrafica = [];

  mejoresVendedores.map((vendedor, index) => {
    vendedorGrafica[index] = {
      ...vendedor.vendedor[0],
      total: vendedor.total,
    };
  });
  console.log(vendedorGrafica);

  return (
    <Layout>
      <h1>Mejores Vendedores</h1>
      <ResponsiveContainer width={"99%"} height={550}>
        <BarChart
          className="mt-10"
          width={600}
          height={500}
          data={vendedorGrafica}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </Layout>
  );
};

export default MejoresVendedores;
