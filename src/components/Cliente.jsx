
const Cliente = ({ cliente }) => {

  const { nombre, email, telefono, empresa } = cliente

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2 border-r">
        <p className="text-2xl text-gray-800 text-center">{nombre}</p>
        <p className="text-gray-800 text-center">{empresa}</p>
      </td>
      <td className="p-6 space-y-2 border-r">
        <p className="text-2xl text-gray-800 text-center">{email}</p>
        <p className="text-gray-800 text-center">{telefono}</p>
      </td>
      <td className="p-6">
        <div className="flex gap-5 justify-center">
          <button className="bg-blue-700 px-3 py-1 text-white text-lg rounded hover:bg-blue-800 transition-all uppercase">
            Editar
          </button>
          <button className="bg-red-700 px-3 py-1 text-white text-lg rounded hover:bg-red-800 transition-all uppercase">
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  )
}

export default Cliente