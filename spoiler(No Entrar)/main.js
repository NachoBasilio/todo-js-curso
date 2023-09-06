const root = document.getElementById("root")


//Funcion creadora de formularios
const funcionCreadoraDeFormulario =(inputs, callback)=>{
    const formularioContenedor = document.createElement("div")
    const botonFormulario = document.createElement("button")

    for (let i = 0; i < inputs.length; i++) {
        const input = document.createElement("input")
        input.placeholder = input[i]

        formularioContenedor.appendChild(input)        
    }

    botonFormulario.innerText = "Enviar"
    formularioContenedor.appendChild(botonFormulario)

    return formularioContenedor
}




//Funcion creadora de nodos
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





//Formulario
const formulario = funcionCreadoraDeFormulario(["Nombre", "Categoria"])

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






root.appendChild(formulario)
root.appendChild(tablero)