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

const buscador= ()=>{
    let alumnoBuscar = prompt('Ingrese el nombre del alumno a buscar')
    if (alumno1.nombre.includes(alumnoBuscar)){
        alert('El alumno buscado se encuentra en la lista');
    }else if(prompt('No se encuentra el alumno. Desea agregarlo:') === 'si'){
        alumno1.nombre.push(prompt('Ingrese el nombre del alumno'))
        alumno1.apellido.push(prompt('Ingrese el apellido del alumno'))
        alumno1.materia.push(prompt('Ingrese la materia'))
        alumno1.nota.push(parseInt(prompt('Ingrese la nota del primer parcial')))
        alumno1.nota.push(parseInt(prompt('Ingrese la nota del segundo parcial')))
        alumno1.nota.push(parseInt(prompt('Ingrese la nota del tercer parcial')))
    }
}



const promedio = () =>{
    let notaTotal = alumno1.nota.reduce((acc, el) => acc+el)
    let promedio = notaTotal / alumno1.nota.length
    alert(`Tu promedio es: ${promedio.toFixed(2)}`)
    
    if (promedio > 6){
        alert(`Felicitaciones aprobaste ${alumno1.materia} con un promedio de ${promedio.toFixed(2)}`);
    }else{
        alert(`Lo siento, no aprobaste ${alumno1.materia}, tu promedio fue de ${promedio.toFixed(2)}`);
    }
    
}


buscador()
promedio()


console.log(alumno1);
console.log(alumno1.nota);