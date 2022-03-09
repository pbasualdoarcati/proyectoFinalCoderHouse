class Alumnos {
    constructor(){
        this.nombre = [];
        this.apellido=[];
        this.materia = [];
        this.nota= [];
    }
    agregarAlumnos(){
        const nombre = document.getElementById('nombre')
        this.nombre.push(nombre.value)
        const apellido = document.getElementById('apellido')
        this.apellido.push(apellido.value)
        const materia = document.getElementById('materia')
        this.materia.push(materia.value)
        const nota1 = document.getElementById('nota1')
        this.nota.push(nota1.value)
        const nota2 = document.getElementById('nota2')
        this.nota.push(nota2.value)
        const nota3 = document.getElementById('nota3')
        this.nota.push(nota3.value)
    }
}

//Esta es nuestra función de agregar alumnos, en la cual va a lanzar la creación del / de los objetos alumnos.
const agregarAlumnos = () =>{

    const alumno1 = new Alumnos()
    alumno1.agregarAlumnos()
    console.log(alumno1); //Realizamos un console.log para saber que es lo que estamos obteniendo

    //Aqui vamos a capturar los valores de manera separada para tratarlos en los for de manera 
    //independiente ya que el segundo valor nos devuelve una matriz que luego debemos separarla
    //Para poder escribirlo en el DOM

    let valores = Object.values(alumno1)
    let valoresArray = [Object.values(alumno1.nota)]
    console.log(valoresArray);//Realizamos un console.log para saber que es lo que estamos obteniendo

    //Aqui vamos a aplicar el promedio en base a los valores ingresados por el usuario en los input 
    //de Notas y lo pusheamos al array

    let notaTotal = alumno1.nota.reduce((acc, el) =>parseInt(acc) + parseInt(el))
    let promedio = notaTotal / alumno1.nota.length
    valoresArray.push(promedio.toFixed(2))

    // Con estas lineas nos aseguramos que guardamos si el alumno aprobo o no dependiendo el 
    //resultado del promedio y lo pusheamos al array

    let resultado

    if (promedio.toFixed(2) > 6){
        resultado = 'Aprobado'
    }else{
        resultado = 'Reprobado'
    }
    valoresArray.push(resultado)

    // Guardamos las iteraciones de los nuevos alumnos ingresados en una funcion, para así poder cargar varios

    const nuevoAlumno = ()=> {

        //Primer For con la intención de escribir los datos obtenidos en los primeros 3 input
        //cuyos valores son el nombre, apellido y materia del alumno
        for (let i = 0; i < 3; i++) {
            console.log(valores[i]); //Realizamos un console.log para saber que es lo que estamos obteniendo
            let nuevaLista = document.getElementById('alumnos')
            let ul = document.createElement('ul')
            ul.classList.add('col-sm')
            ul.classList.add('border')
            ul.classList.add('border-secondary')
            nuevaLista.appendChild(ul)
            
            let li = document.createElement('li')
            li.classList.add('col-sm')
            li.classList.add('items')
            let liText = document.createTextNode(valores[i])
            li.appendChild(liText)
            ul.appendChild(li)
        
        }
        
        //En nuestro segundo For, tomamos lo contenido en la variable anterior, cuyo contenido es una
        //matriz, la dividimos en un array plano y con eso lo impimimos en el DOM.
        for (const elemento of valoresArray.flat()) {
            let nuevaLista = document.getElementById('alumnos')
            let ul = document.createElement('ul')
            ul.classList.add('col-sm')
            ul.classList.add('border')
            ul.classList.add('border-secondary')
            nuevaLista.appendChild(ul)
            
            let li = document.createElement('li')
            li.classList.add('col-sm')
            li.classList.add('items')
            let liText = document.createTextNode(elemento)
            li.appendChild(liText)
            ul.appendChild(li)
            
        }
    }

    //Con estas lineas lo que voy a crear es un salto de linea cuando imprima los nuevos alumnos
    // luego llamo a la función para cargar e imprimir los nuevos alumnos

    let nuevaLista = document.getElementById('alumnos')
    let ul2 = document.createElement('ul')
    nuevaLista.appendChild(ul2)
    nuevoAlumno()
    
    

    //Limpiamos el formulario
    document.getElementById('formularioAlumno').reset()



}