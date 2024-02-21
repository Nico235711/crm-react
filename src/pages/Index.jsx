import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export const loader = () => {
  const clientes = [
    {
      id: 1,
      nombre: 'Juan',
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 2,
      nombre: 'Karen',
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 3,
      nombre: 'Josue',
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 4,
      nombre: 'Miguel',
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 5,
      nombre: 'Pedro',
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: 'Codigo Con Juan'
    }
  ];

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