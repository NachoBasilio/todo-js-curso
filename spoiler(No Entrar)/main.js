const root = document.getElementById("root")


//Funcion creadora de formularios
const funcionCreadoraDeFormulario = (inputs, callback)=>{
    const formularioContenedor = document.createElement("form")
    const botonFormulario = document.createElement("button")

    for (let i = 0; i < inputs.length; i++) {
        const input = document.createElement("input")
        input.placeholder = inputs[i]

        formularioContenedor.appendChild(input)        
    }

    botonFormulario.innerText = "Enviar"
    formularioContenedor.appendChild(botonFormulario)

    formularioContenedor.addEventListener("submit", callback)


    return formularioContenedor
}

//Funcion de callback
const funcionParaElEvento = (e)=>{
    e.preventDefault()
    console.log("asdasd")
    const valorNombre = e.target[0]
    const valorCategorias = e.target[1]

    if(formulario.firstChild.id == "error"){
        
        formulario.removeChild(formulario.firstChild)
        
    }
    

    if(valorNombre.value.length < 3) {
        formulario.prepend(errorNodo("Nombre muy pequeño"))
        document.getElementById('error').classList.add('mostrar');
        return
    }
    if(valorCategorias.value.length < 3) {
        formulario.prepend(errorNodo("Categoria muy pequeño"))
        document.getElementById('error').classList.add('mostrar');
        return
    }


    const nodoAux = funcionQueCreaNodos(valorNombre.value, valorCategorias.value)
    nodoAux.classList.add("item-tablero")
    
    tablero.appendChild(nodoAux)


    valorNombre.value = ""
    valorCategorias.value = ""
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
tablero.classList.add("tablero")





//Formulario
const formulario = funcionCreadoraDeFormulario(["Nombre", "Categoria"], funcionParaElEvento)








root.appendChild(formulario)
root.appendChild(tablero)