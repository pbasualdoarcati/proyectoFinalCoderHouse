class Alumnos {
    constructor(){
        this.nombre = '';
        this.apellido= '';
        this.materia = '';
        this.nota= [];
    }
    agregarAlumnos(){
        const nombre = document.getElementById('nombre')
        this.nombre = nombre.value 
        const apellido = document.getElementById('apellido')
        this.apellido = apellido.value
        const materia = document.getElementById('materia')
        this.materia = materia.value
        const nota1 = document.getElementById('nota1')
        this.nota.push(nota1.value)
        const nota2 = document.getElementById('nota2')
        this.nota.push(nota2.value)
        const nota3 = document.getElementById('nota3')
        this.nota.push(nota3.value)
    }
}


// CREO UN ARRAY VACIO PARA IR CARGANDO LOS ALUMNOS AL LISTADO

const alumnosLista = []; 
    


// Creo una variable para guardar todo lo contenido en el localStorage
let listaGuardada = localStorage.getItem('alumnosLista')
console.log(JSON.parse(listaGuardada));

//Ahora compruebo que listaGuardada contenga información de cargas anteriores, en caso positivo, debo
//separar el array en cada objeto y esos objetos a su vez iterarlos para poder escribirlos en el DOM

if (listaGuardada) {
    listaGuardada = JSON.parse(listaGuardada)
    for(let i = 0; i < listaGuardada.length; i++){
        console.log(listaGuardada[i].nombre);
        console.log(listaGuardada[i].apellido);
        console.log(listaGuardada[i].materia);
        console.log(listaGuardada[i].nota);


        // Creamos por cada elemento un lugar para su escritura

        //Primero con el nombre


        let nombresGuardados = document.getElementById('alumnosCargados')
        let ul1 = document.createElement('ul')
        nombresGuardados.appendChild(ul1)
        ul1.classList.add('col-sm')
        ul1.classList.add('border')
        ul1.classList.add('border-secondary')

        let li1 = document.createElement('li')
        let li1text = document.createTextNode(listaGuardada[i].nombre)
        li1.appendChild(li1text)
        ul1.appendChild(li1)
        li1.classList.add('col-sm')
        li1.classList.add('items')

        //Segundo con el apellido


        let apellidosGuardados = document.getElementById('alumnosCargados')
        let ul2 = document.createElement('ul')
        apellidosGuardados.appendChild(ul2)
        ul2.classList.add('col-sm')
        ul2.classList.add('border')
        ul2.classList.add('border-secondary')

        let li2 = document.createElement('li')
        let li2text = document.createTextNode(listaGuardada[i].apellido)
        li2.appendChild(li2text)
        ul2.appendChild(li2)
        li2.classList.add('col-sm')
        li2.classList.add('items')

        //Tercero con las materias

        let materiaGuardados = document.getElementById('alumnosCargados')
        let ul3 = document.createElement('ul')
        materiaGuardados.appendChild(ul3)
        ul3.classList.add('col-sm')
        ul3.classList.add('border')
        ul3.classList.add('border-secondary')

        let li3 = document.createElement('li')
        let li3text = document.createTextNode(listaGuardada[i].materia)
        li3.appendChild(li3text)
        ul3.appendChild(li3)
        li3.classList.add('col-sm')
        li3.classList.add('items')

        //Cuarto con la primer nota del parcial

        let primerGuardados = document.getElementById('alumnosCargados')
        let ul4 = document.createElement('ul')
        primerGuardados.appendChild(ul4)
        ul4.classList.add('col-sm')
        ul4.classList.add('border')
        ul4.classList.add('border-secondary')
        
        let li4 = document.createElement('li')
        let li4text = document.createTextNode(listaGuardada[i].nota[0])
        li4.appendChild(li4text)
        ul4.appendChild(li4)
        li4.classList.add('col-sm')
        li4.classList.add('items')
        

        //Quinto con la segunda nota del parcial

        let segundoGuardados = document.getElementById('alumnosCargados')
        let ul5 = document.createElement('ul')
        segundoGuardados.appendChild(ul5)
        ul5.classList.add('col-sm')
        ul5.classList.add('border')
        ul5.classList.add('border-secondary')

        let li5 = document.createElement('li')
        let li5text = document.createTextNode(listaGuardada[i].nota[1])
        li5.appendChild(li5text)
        ul5.appendChild(li5)
        li5.classList.add('col-sm')
        li5.classList.add('items')


        //Sexto con la tercer y ultima nota del parcial

        let terceroGuardados = document.getElementById('alumnosCargados')
        let ul6 = document.createElement('ul')
        terceroGuardados.appendChild(ul6)
        ul6.classList.add('col-sm')
        ul6.classList.add('border')
        ul6.classList.add('border-secondary')

        let li6 = document.createElement('li')
        let li6text = document.createTextNode(listaGuardada[i].nota[2])
        li6.appendChild(li6text)
        ul6.appendChild(li6)
        li6.classList.add('col-sm')
        li6.classList.add('items')

        //Ahora creamos 2 variables, una para guardar la sumatoria total de las notas
        //y la segunda va a guardar el promedio obtenido con el resultado de la sumatoria
        //divido 3 que son las cantidades de notas ingresadas y creamos los elementos
        //para escribirlo en el DOM
        
        let notaTotal = listaGuardada[i].nota.reduce((acc, el) => parseInt(acc) + parseInt(el))
        let promedio = notaTotal / 3
        
        let promedioGuardados = document.getElementById('alumnosCargados')
        let ul7 = document.createElement('ul')
        promedioGuardados.appendChild(ul7)
        ul7.classList.add('col-sm')
        ul7.classList.add('border')
        ul7.classList.add('border-secondary')

        let li7 = document.createElement('li')
        let li7text = document.createTextNode(promedio)
        li7.appendChild(li7text)
        ul7.appendChild(li7)
        li7.classList.add('col-sm')
        li7.classList.add('items')
        

        //Por ultimo, creamos una variable que contendra un string con dos valores, Aprobado o Reprobado
        //El mismo sera obtenido de una evaluación del resultado del promedio, nuevamente creamos el elemento
        // para escribirlo en el DOM

        let resultado

        if (promedio.toFixed(2) > 6){
            resultado = 'Aprobado'
        }else{
            resultado = 'Reprobado'
        }

        let estadoGuardados = document.getElementById('alumnosCargados')
        let ul8 = document.createElement('ul')
        estadoGuardados.appendChild(ul8)
        ul8.classList.add('col-sm')
        ul8.classList.add('border')
        ul8.classList.add('border-secondary')

        let li8 = document.createElement('li')
        let li8text = document.createTextNode(resultado)
        li8.appendChild(li8text)
        ul8.appendChild(li8)
        li8.classList.add('col-sm')
        li8.classList.add('items')


        //Una vez que escribimos todo en el DOM con el o los objetos guardados del localStorage, es necesario
        //crear un salto de linea, así cada iteración se escribe una bajo la otra


        let salto = document.getElementById('alumnosCargados')
        let u9 = document.createElement('ul')
        salto.appendChild(u9)

    }

}

 
   

//Esta es nuestra función de agregar alumnos, en la cual va a lanzar la creación del / de los objetos alumnos.
const agregarAlumnos = () =>{

    const alumno1 = new Alumnos()
    alumno1.agregarAlumnos()
    alumnosLista.push(alumno1)
    console.log('agregarAlumnos() : ', alumno1); //Realizamos un console.log para saber que es lo que estamos obteniendo
    console.log('alumnosLista[] : ', alumnosLista); //Realizamos un console.log para saber que es lo que estamos obteniendo

    //Aqui vamos a capturar los valores de manera separada para tratarlos en los for de manera 
    //independiente ya que el segundo valor nos devuelve una matriz que luego debemos separarla
    //Para poder escribirlo en el DOM

    let valores = Object.values(alumno1)
    let valoresArray = [Object.values(alumno1.nota)]
    console.log('valoresArray: ', valoresArray);//Realizamos un console.log para saber que es lo que estamos obteniendo

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
            console.log('for de nuevoAlumno() : ',valores[i]); //Realizamos un console.log para saber que es lo que estamos obteniendo
            let nuevaLista = document.getElementById('alumnos')
            let ul = document.createElement('ul')
            nuevaLista.appendChild(ul)
            ul.classList.add('col-sm')
            ul.classList.add('border')
            ul.classList.add('border-secondary')
            
            let li = document.createElement('li')
            let liText = document.createTextNode(valores[i])
            li.appendChild(liText)
            ul.appendChild(li)
            li.classList.add('col-sm')
            li.classList.add('items')
        
        }
        
        //En nuestro segundo For, tomamos lo contenido en la variable anterior, cuyo contenido es una
        //matriz, la dividimos en un array plano y con eso lo impimimos en el DOM.
        for (const elemento of valoresArray.flat()) {
            let nuevaLista = document.getElementById('alumnos')
            let ul = document.createElement('ul')
            nuevaLista.appendChild(ul)
            ul.classList.add('col-sm')
            ul.classList.add('border')
            ul.classList.add('border-secondary')

            
            let li = document.createElement('li')
            let liText = document.createTextNode(elemento)
            li.appendChild(liText)
            ul.appendChild(li)
            li.classList.add('col-sm')
            li.classList.add('items')
        }

        
        
    }
    
    


    //Con estas lineas lo que voy a crear es un salto de linea cuando imprima los nuevos alumnos
    // luego llamo a la función para cargar e imprimir los nuevos alumnos

    let nuevaLista = document.getElementById('alumnos')
    let ul2 = document.createElement('ul')
    nuevaLista.appendChild(ul2)
    nuevoAlumno()
    
    
    // CON ESTA LINEA RECUEPRO EL OJBETO CON LOS ALUMOS GUARDADOS EN EL LOCAL STORAG 
    // let alumnosLocalStorage = JSON.parse(localStorage.getItem('alumnosLista'))
    // console.log('alumnosLocalStorage : ', alumnosLocalStorage[0].nombre)

    //Limpiamos el formulario
    document.getElementById('formularioAlumno').reset()



}



const guardar = () => {
        // GUARDO LOS ALUMNOS EN EL LOCAL STORAGE BAJO UN MISMO ID y refrescamos la pagina

        localStorage.setItem('alumnosLista', JSON.stringify(alumnosLista)) 
        location.reload();
}
