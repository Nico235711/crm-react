import { Form, useLoaderData, useNavigate, useActionData, redirect } from "react-router-dom"
import { actualizarCliente, obtenerCliente } from "../data/clientes"
import Formulario from "../components/Formulario"
import Error from "../components/Error";

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId)
  return cliente
}

export async function action({ request, params }) {

  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get("email")

  // validación
  const errores = []
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios")
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!regex.test(email)) {
    errores.push("El email no es válido")
  }
  
  // retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores
  }

  // actualizar cliente
  await actualizarCliente(params.clienteId, datos)

  return redirect("/")
}

const EditarCliente = () => {

  const cliente = useLoaderData()
  const navigate = useNavigate();
  const errores = useActionData()

  return (
    <>
      <h1 className="text-4xl font-black text-blue-900">Editar Cliente</h1>
      <p className="mt-3">A continuación podrás modificar los datos de un cliente</p>
      <div className="flex justify-end">
        <button 
          className="bg-blue-700 text-white uppercase font-bold rounded px-3 py-1 hover:bg-blue-800 transition-all"
          onClick={() => navigate("/")} // tambien funcion con -1
          >
            Volver
        </button>
      </div>
      
      <div className="bg-white md:w-3/4 rounded shadow-md mx-auto px-5 py-10 my-10">
      
        {
          errores?.length && errores.map((error, i) => (
            <Error key={i}>{error}</Error>
          ))
        }
      
        <Form method="POST" noValidate>
          <Formulario 
            cliente={cliente}
          />
      
          <input
            type="submit"
            className="bg-blue-700 text-white uppercase w-full py-2 font-bold text-lg cursor-pointer mt-3"
            value="Guardar Cambios"
          />
        </Form>
      </div>
    </>
  )
}

export default EditarCliente