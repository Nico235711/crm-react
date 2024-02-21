export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL)
  const resultado = await respuesta.json()
  return resultado
}

export async function obtenerCliente(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
  if (!respuesta.ok) {
    throw new Error("El cliente no fue encontrado")
  }
  const resultado = await respuesta.json()
  return resultado
}

export async function agregarCliente(datos) {

  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "post",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json"
      }
    })
    await respuesta.json()

  } catch (error) {
    console.error(error);
  }
}

export async function actualizarCliente(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "put",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json"
      }
    })
    await respuesta.json()

  } catch (error) {
    console.error(error);
  }
}

export async function eliminarCliente(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "delete"
    })
    await respuesta.json()

  } catch (error) {
    console.error(error);
  }
}