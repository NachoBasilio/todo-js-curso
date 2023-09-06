const root = document.getElementById("root")


//Funcion creadora
const funcionQueCreaNodos = (nombre, categoria, url)=>{
    const nombreNodo = document.createElement("p")
    const categoriaNodo = document.createElement("p")
    const imagenNodo = document.createElement("img")

    //Contenedor
    const contenedor = document.createElement("div")

    //Checkbox
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"

    //Imagen
    imagenNodo.src = url

    nombreNodo.innerText = nombre
    categoriaNodo.innerText = categoria

    contenedor.appendChild(nombreNodo)
    contenedor.appendChild(categoriaNodo)
    contenedor.appendChild(imagenNodo)
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

//imagenes
const inputImagen = document.createElement("input")

//Boton
const botonSubmit = document.createElement("button")
botonSubmit.innerText = "Enviar"

//Formulario
const formulario = document.createElement("form")

formulario.appendChild(inputNombre)

formulario.appendChild(inputCategorias)

formulario.appendChild(inputImagen)

formulario.appendChild(botonSubmit)

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nodoNombre = e.target[0]
    const nodoCategorias = e.target[1]
   
    const nodoImagen = e.target[2]

    if(formulario.firstChild.id == "error"){
        formulario.removeChild(formulario.firstChild)
    }
    

    if(nodoNombre.value.length < 3) {
        formulario.prepend(errorNodo("Nombre muy pequeño"))
        
        return
    }
    if(nodoCategorias.value.length < 3) {
        formulario.prepend(errorNodo("Categoria muy pequeño"))
        
        return
    }
   
    if(nodoImagen.value.length < 3) {
        formulario.prepend(errorNodo("URL muy pequeño"))
        
        return
    }


    const nodoAux = funcionQueCreaNodos(nodoNombre.value, nodoCategorias.value, nodoImagen.value)
    nodoAux.classList.add("tablero")
    
    tablero.appendChild(nodoAux)


    nodoNombre.value = ""
    nodoCategorias.value = ""
})






root.appendChild(formulario)
root.appendChild(tablero)