import { useRouteError } from "react-router-dom"


const ErrorPage = () => {

  const error = useRouteError()


  return (
    <div className="space-y-8">
      <h1 className="text-center text-blue-800 text-6xl font-black mt-20">CRM - Clientes</h1>
      <p className="text-center text-red-600 text-5xl font-bold">Hubo un error</p>
      <p className="text-center text-lg">{error.message}</p>
    </div>
  )
}

export default ErrorPage