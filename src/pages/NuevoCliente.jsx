import { Form, useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

export function action() {
  console.log("Desde action");
}

const NuevoCliente = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <h1 className="text-4xl font-black text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena todos los para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button 
          className="bg-blue-700 text-white uppercase font-bold rounded px-3 py-1 hover:bg-blue-800 transition-all"
          onClick={() => navigate("/")} // tambien funcion con -1
          >
            Volver
        </button>
      </div>

      <div className="bg-white md:w-3/4 rounded shadow-md mx-auto px-3 py-2 my-10">
        <Form method="POST">
          <Formulario />
          
          <input 
            type="submit" 
            className="bg-blue-700 text-white uppercase w-full py-2 font-bold text-lg cursor-pointer mt-3"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente