const root = document.getElementById("root")


//Funcion creadora
const funcionQueCreaNodos = (nombre, categoria)=>{
    const nombreNodo = document.createElement("p")
    const categoriaNodo = document.createElement("p")

    //Contenedor
    const contenedor = document.createElement("div")

    //checkbox
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"

    nombreNodo.innerText = nombre
    categoriaNodo.innerText = categoria

    contenedor.appendChild(nombreNodo)
    contenedor.appendChild(categoriaNodo)
    contenedor.appendChild(checkBox)
    
    return contenedor
}

const errorNodo = (error)=>{
    const errorNodo = document.createElement("p")
    errorNodo.innerText = error
    const contenedor = document.createElement("div")
    contenedor.id = "error"
    contenedor.appendChild(errorNodo)


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
    const valorNombre = e.target[0]
    const valorCategorias = e.target[1]

    if(formulario.firstChild.id == "error"){
        formulario.removeChild(formulario.firstChild)
    }
    

    if(valorNombre.value.length < 3) {
        formulario.prepend(errorNodo("Nombre muy pequeño"))
        
        return
    }
    if(valorCategorias.value.length < 3) {
        formulario.prepend(errorNodo("Categoria muy pequeño"))
        
        return
    }


    const nodoAux = funcionQueCreaNodos(valorNombre.value, valorCategorias.value)
    nodoAux.classList.add("tablero")
    
    tablero.appendChild(nodoAux)


    valorNombre.value = ""
    valorCategorias.value = ""
})




formulario.appendChild(inputNombre)

formulario.appendChild(inputCategorias)

formulario.appendChild(botonSubmit)

root.appendChild(formulario)
root.appendChild(tablero)