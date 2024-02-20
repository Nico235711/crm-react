import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {

  // resaltar la página actual
  const location = useLocation();
  const paginaPrincipal = location.pathname === "/"
  const paginaNuevoCliente = location.pathname === "/clientes/nuevo"
  
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-center text-white font-bold text-4xl">
          CRM - Clientes
        </h2>

        <nav className="mt-10">
          {/* navegar entre páginas de forma optimazada */}
          <Link 
            to="/"
            className={`${paginaPrincipal ? "text-blue-500" : "text-white"} text-2xl text-center block  mt-2 hover:text-blue-500`}
          >
            Clientes
          </Link>
          <Link 
            to="/clientes/nuevo"
            className={`${paginaNuevoCliente ? "text-blue-500" : "text-white"} text-2xl text-center block  mt-2 hover:text-blue-500`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 md:h-screen overflow-scroll p-10">
        <Outlet />
      </main>
      
    </div>
  )
}

export default Layout