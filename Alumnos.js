class Alumnos {
    constructor(){
        this.nombre = [];
        this.apellido=[];
        this.materia = [];
        this.nota= [];
    }
    agregarAlumnos(){
        let cantidad = 0
        while(cantidad < 1){
            this.nombre.push(prompt('Ingrese el nombre del alumno'))
            this.apellido.push(prompt('Ingrese el apellido del alumno'))
            this.materia.push(prompt('Ingrese la materia'))
            this.nota.push(parseInt(prompt('Ingrese la nota del primer parcial')))
            this.nota.push(parseInt(prompt('Ingrese la nota del segundo parcial')))
            this.nota.push(parseInt(prompt('Ingrese la nota del tercer parcial')))
            cantidad ++
        }
    }
}


const alumno1 = new Alumnos()
alumno1.agregarAlumnos()

// Variables para interactuar con el DOM
const name= document.getElementById('name')
name.innerText= alumno1.nombre
const lastname= document.getElementById('lastname')
lastname.innerText= alumno1.apellido
const subject= document.getElementById('subject')
subject.innerText= alumno1.materia
const subject1= document.getElementById('subject1')
subject1.innerText= alumno1.nota[0]
const subject2= document.getElementById('subject2')
subject2.innerText= alumno1.nota[1]
const subject3= document.getElementById('subject3')
subject3.innerText= alumno1.nota[2]
const average= document.getElementById('average')
const state= document.getElementById('state')





const buscador= ()=>{
    let alumnoBuscar = prompt('Ingrese el nombre del alumno a buscar')
    if (alumno1.nombre.includes(alumnoBuscar)){
        alert('El alumno buscado se encuentra en la lista');
    }else if(prompt('No se encuentra el alumno. Desea agregarlo:') === 'si'){
        const alumno2 = new Alumnos()
        alumno2.agregarAlumnos()
        console.log(alumno2);
    }
}



const promedio = () =>{
    let notaTotal = alumno1.nota.reduce((acc, el) => acc+el)
    let promedio = notaTotal / alumno1.nota.length
    
    if (promedio > 6){
        average.innerText= promedio.toFixed(2)
        state.innerText = 'Aprobado'
    }else{
        average.innerText= promedio.toFixed(2)
        state.innerText = 'Reprobado'
    }
    
}


buscador()
// promedio()

