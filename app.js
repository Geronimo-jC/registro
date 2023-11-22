const registros = []

function agregarDatos(event){
    event.preventDefault()
    let nombre = document.getElementById("nombre")
    let ul = document.getElementById("registros")

    registros.push(nombre.value)
    ul.innerHTML +=`<li>${nombre.value}</li>` 
    nombre.value = ""
    registros.map((elemento, indice)=>{
        console.log(elemento, indice)
    })
}

