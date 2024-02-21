import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";

export const loader = () => {
  const clientes = obtenerClientes()

  return clientes
}


const Index = () => {
  
  const clientes = useLoaderData()
  
  return (
    <>
      <h1 className="text-4xl font-black text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {
        clientes.length ? (
          // itero sobre mis clientes
          <table className="bg-white shadow-md mt-5 table-auto w-full">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2 border-r">Cliente</th>
                <th className="p-2 border-r">Contacto</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {
                clientes.map(cliente => (
                  <Cliente 
                    key={cliente.id}
                    cliente={cliente}
                  />
                ))
              }
            </tbody>
          </table>
          ) : (
            <p className="text-center font-bold text-lg">No hay clientes para mostrar</p>
          )
      }
    </>
  )
}

export default Index