const root = document.getElementById("root")


//Funcion creadora
const funcionQueCreaNodos = (nombre, categoria)=>{
    const nombreNodo = document.createElement("p")
    const categoriaNodo = document.createElement("p")
    //Contenedor
    const contenedor = document.createElement("div")

    nombreNodo.innerText = nombre
    categoriaNodo.innerText = categoria

    contenedor.appendChild(nombreNodo)
    contenedor.appendChild(categoriaNodo)

    return contenedor
}


//tablero

const tablero = document.createElement("div")


//Nombres
const inputNombre = document.createElement("input")

//Categorias
const inputCategorias = document.createElement("input")

//Boton
const botonSubmit = document.createElement("button")
botonSubmit.innerText = "Enviar"

//Formulario
const formulario = document.createElement("form")
formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    const valorNombre = e.target[0].value
    const valorCategorias = e.target[1].value


    const nodoAux = funcionQueCreaNodos(valorNombre, valorCategorias)
    tablero.appendChild(nodoAux)
})




formulario.appendChild(inputNombre)

formulario.appendChild(inputCategorias)

formulario.appendChild(botonSubmit)

root.appendChild(formulario)
root.appendChild(tablero)