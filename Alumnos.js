//Login
//En primera medida capturamos todo lo necesario para trabajar tanto con el modal
//como con los datos de nuestros input

let dialog = document.querySelector('dialog')
let loginUser = document.getElementById('loginUser')
let logout = document.getElementById('logout')
let cancel = document.getElementById('cancel')
let containerLogin = document.getElementById('containerLogin')
let init = document.getElementById('init')
let inicioSesion = document.getElementById('inicioSesion')
let user = document.getElementById('user')
let password = document.getElementById('password')

//Comenzamos con el click en el link de iniciar sesion, en el mismo vamos a mostrar nuestro 
//modal que esta escondido y si deseamos cerrarlo, simplemente lo ocultamos.
loginUser.addEventListener('click', ()=> {
    dialog.showModal()
    containerLogin.classList.add('modalLogin')

})
cancel.addEventListener('click', ()=> {
    containerLogin.classList.remove('modalLogin')
    dialog.close()
})

//El inicio de sesion se basa en una promesa asincrona, en la cual, el usuario administrador
//va a hacer click primero en iniciar sesión y luego llenara los input con dos valores 
// que son por defecto admin y admin, en el mismo lo lógica de programación es la siguiente:
// capturamos los valores de los input user y password, y los sometemos a una promesa 
// con un condicional, en la promesa que nos trae de nuestra simulación de base de datos
// los valores de "user" y de "password" que al ser sometidos al condicional 
//de igualdad estricta en caso de ser verdadero:
// 1)Elimina el bloqueo de uso del simulador
// 2) Va a ocular la opción de inicio de sesión porque no tendria sentido que siga apareciendo
// 3) Va a mostrar la opción de cerrar la sesion
// 4) Eliminara la clase que hacer que el modal de login bloquee toda interación
// 5) Cierra el modal

// En caso de resultar falso, se notifica al usuario de su error

inicioSesion.addEventListener('click', ()=>{
    
    let userValue = user.value
    let passwordValue = password.value

    async function login(){
        const url = '/usuario.json'
        const res = await fetch(url)
        const data = await res.json()
        if ((userValue === data[0].user) && (passwordValue === data[0].password)) {
            init.classList.remove('init')
            loginUser.setAttribute('hidden', "")
            logout.removeAttribute('hidden', "")
            containerLogin.classList.remove('modalLogin')
            Swal.fire({
                icon: 'success',
                title: 'Inicio correcto',
                timer: 1500,
            })
            dialog.close()
            document.getElementById('formularioLogin').reset()
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Usuario y contraseña incorrecto',
                timer: 2000,
            })
            dialog.close()
            document.getElementById('formularioLogin').reset()
        }
    }
    login()
})

// Una vez que se simulo el inicio de sesión, aparece la opción de salir, con lo cual
// hace lo contrario al punto anterior:
// 1) Remueve el atributo hidden de iniciar sesión
// 2) Le agrega el atributo hidden al logout
// 3) Y vuelve a agregar las clases de inicio y modal del login

logout.addEventListener('click', ()=>{
    loginUser.removeAttribute('hidden', "")
    logout.setAttribute('hidden', "")
    init.classList.add('init')
    containerLogin.classList.add('modalLogin')
})

class Alumnos {
    constructor() {
        this.nombre = '';
        this.apellido = '';
        this.materia = '';
        this.nota = [];
    }
    agregarAlumnos() {
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



//Variable para escribir en el DOM
let listaGuardada = localStorage.getItem('alumnosLista')
escribirGuardados()



//Ahora compruebo que listaGuardada contenga información de cargas anteriores, en caso positivo, debo
//separar el array en cada objeto y esos objetos a su vez iterarlos para poder escribirlos en el DOM

function escribirGuardados(){
let listaGuardada = JSON.parse(localStorage.getItem('alumnosLista'))
if (listaGuardada) {

    for (let i = 0; i < listaGuardada.length; i++) {

        // Creamos por cada elemento un lugar para su escritura
        //Primero creamos el ID que identificara a cada alumno 

        let id = 1;


        let idAlumno = document.getElementById('alumnosGuardados')
        let ul = document.createElement('ul')
        idAlumno.appendChild(ul)
        ul.classList.add('col-sm')
        ul.classList.add('border')
        ul.classList.add('border-secondary')

        let li = document.createElement('li')
        let litext = document.createTextNode(id + i)
        li.appendChild(litext)
        ul.appendChild(li)
        li.classList.add('col-sm')
        li.classList.add('items')



        //Segundo con el nombre


        let nombresGuardados = document.getElementById('alumnosGuardados')
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

        //Tercero con el apellido


        let apellidosGuardados = document.getElementById('alumnosGuardados')
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

        //Cuarto con las materias

        let materiaGuardados = document.getElementById('alumnosGuardados')
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

        //Quinto con la primer nota del parcial

        let primerGuardados = document.getElementById('alumnosGuardados')
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


        //Sexto con la segunda nota del parcial

        let segundoGuardados = document.getElementById('alumnosGuardados')
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

        let terceroGuardados = document.getElementById('alumnosGuardados')
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

        let notaTotal = parseInt(listaGuardada[i].nota[0])+ parseInt(listaGuardada[i].nota[1])+parseInt(listaGuardada[i].nota[2])
        let promedio = notaTotal / 3

        let promedioGuardados = document.getElementById('alumnosGuardados')
        let ul7 = document.createElement('ul')
        promedioGuardados.appendChild(ul7)
        ul7.classList.add('col-sm')
        ul7.classList.add('border')
        ul7.classList.add('border-secondary')

        let li7 = document.createElement('li')
        let li7text = document.createTextNode(promedio.toFixed(2))
        li7.appendChild(li7text)
        ul7.appendChild(li7)
        li7.classList.add('col-sm')
        li7.classList.add('items')


        //Luego creamos una variable que contendra un string con dos valores, Aprobado o Reprobado
        //El mismo sera obtenido de una evaluación del resultado del promedio mediante un ternario, nuevamente creamos el elemento
        // para escribirlo en el DOM

        let resultado

        promedio.toFixed(2) > 6 ? resultado = 'Aprobado' : resultado = 'Reprobado'


        // Por ultimo, escribimos los alumnos cargados y guardados en el localStorage


        let estadoGuardados = document.getElementById('alumnosGuardados')
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


        let salto2 = document.getElementById('alumnosGuardados')
        let u9 = document.createElement('ul')
        salto2.appendChild(u9)

    }

}
}



//Esta es nuestra función de agregar alumnos, en la cual va a lanzar la creación del / de los objetos alumnos.

let idAlumno = 0
let btnAlumno = document.getElementById('btnAlumno')

btnAlumno.addEventListener('click', (e) => {

    if ((nombre.value !== '') && (apellido.value !== '') && (materia.value !== '') && (nota1.value !== '') && (nota2.value !== '') && (nota3.value !== '')) {

        e.preventDefault()


        const alumno1 = new Alumnos()
        alumno1.agregarAlumnos()
        alumnosLista.push(alumno1)

        //Aqui vamos a capturar los valores de manera separada para tratarlos en los for de manera 
        //independiente ya que el segundo valor nos devuelve una matriz que luego debemos separarla
        //Para poder escribirlo en el DOM

        let valores = Object.values(alumno1)
        let valoresArray = [Object.values(alumno1.nota)]

        //Aqui vamos a aplicar el promedio en base a los valores ingresados por el usuario en los input 
        //de Notas y lo pusheamos al array

        let notaTotal = alumno1.nota.reduce((acc, el) => parseInt(acc) + parseInt(el))
        let promedio = notaTotal / alumno1.nota.length
        valoresArray.push(promedio.toFixed(2))

        // Con estas lineas nos aseguramos que guardamos si el alumno aprobo o no dependiendo el 
        //resultado del promedio y lo pusheamos al array

        let resultado

        promedio.toFixed(2) > 6 ? resultado = 'Aprobado' : resultado = 'Reprobado'

        valoresArray.push(resultado)

        //Guardamos en un contenedor con ID dinamico toda la lista, con el fin de poder elimnar dependiendo el ID

        let alumnoContainer = document.getElementById('alumnos')
        let divAlumnoContainer = document.createElement('div')
        divAlumnoContainer.classList.add('row', 'm-0', 'p-0')
        divAlumnoContainer.setAttribute('id', `${idAlumno + 1}`)
        alumnoContainer.appendChild(divAlumnoContainer)

        idAlumno++

        // Guardamos las iteraciones de los nuevos alumnos ingresados en una funcion, para así poder cargar varios

        const nuevoAlumno = () => {

            // Cada vez que lanzamos la función, le designamos un ID basandonos en el contenido de idAlumno, de manera que para eliminar el elemento podemos identificar este numero

            let nuevaLista = document.getElementById(`${idAlumno}`)

            let ul1 = document.createElement('ul')
            nuevaLista.appendChild(ul1)
            ul1.classList.add('col-sm', 'border', 'border-secondary', 'd-flex')

            let btnDelete = document.createElement('a')
            btnDelete.innerHTML = `<span class="material-icons">delete</span>`
            btnDelete.classList.add('col-sm','items', 'btn', 'btn-danger', 'material-icons')
            ul1.appendChild(btnDelete)

            let btnEdit = document.createElement('a')
            btnEdit.innerHTML= `<span class="material-icons">mode_edit</span>`
            btnEdit.classList.add ('col-sm', 'items', 'btn', 'btn-success', 'material-icons')
            ul1.appendChild(btnEdit)

            let li1 = document.createElement('li')
            let li1Text = document.createTextNode(alumnosLista.length)
            li1.appendChild(li1Text)
            ul1.appendChild(li1)
            li1.classList.add('col-sm', 'items')
            li1.setAttribute('id', `idTemporal${idAlumno}`)
            li1.setAttribute('hidden', '')

            btnDelete.onclick = (e)=>{
               let btnDeleteAlumno = e.target.parentNode.parentNode.parentNode.id;
               document.getElementById(btnDeleteAlumno).innerHTML=""
               alumnosLista.pop()
            }

            btnEdit.onclick = (e)=>{
                //Declaramos las variables que usaremos
                let btnEditId = e.target.parentNode.parentNode.parentNode.id;

                let btnFirstElement =e.target.parentNode.parentNode.parentNode
                let btnEditar= btnFirstElement.firstChild
                let btnEditName= btnEditar.nextSibling
                let btnEditNombre = btnEditName.firstChild
                let btnEditSurname= btnEditName.nextSibling
                let btnEditApellido= btnEditSurname.firstChild
                let btnEditSubject = btnEditSurname.nextSibling
                let btnEditMateria = btnEditSubject.firstChild
                let btnEditSujectOne = btnEditSubject.nextSibling
                let btnEditMateria1= btnEditSujectOne.firstChild
                let btnEditSubjectTwo=btnEditSujectOne.nextSibling
                let btnEditMateria2 = btnEditSubjectTwo.firstChild
                let btnEditSubjectThree=btnEditSubjectTwo.nextSibling
                let btnEditMateria3 = btnEditSubjectThree.firstChild
                let btnEditAverage = btnEditSubjectThree.nextSibling
                let btnEditPromedio =btnEditAverage.firstChild
                let btnEditState =btnEditAverage.nextSibling
                let btnEditEstado = btnEditState.firstChild

               
                //Ocultar botones
                btnDelete.setAttribute('hidden', '')
                btnEdit.setAttribute('hidden', '')

                //Mostrar botones de confirmar y cancelar
                let btnConfirm = document.createElement('a')
                btnConfirm.innerHTML= `<span class="material-icons">done</span>`
                btnConfirm.classList.add ('col-sm', 'items', 'btn', 'btn-success', 'material-icons')
                btnEditar.appendChild(btnConfirm)

                let btnCancel = document.createElement('a')
                btnCancel.innerHTML= `<span class="material-icons">close</span>`
                btnCancel.classList.add ('col-sm', 'items', 'btn', 'btn-danger', 'material-icons')
                btnEditar.appendChild(btnCancel)

                //Input en Nombre
                let inputName = document.createElement('input')
                inputName.classList.add('container')
                inputName.setAttribute('require', '')
                inputName.setAttribute('minlength', '3')
                inputName.setAttribute('maxlength', '25')
                btnEditName.appendChild(inputName)
                btnEditNombre.setAttribute('hidden', '')

                //Input en Apellido
                let inputSurname = document.createElement('input')
                inputSurname.classList.add('container')
                inputSurname.setAttribute('required', '')
                inputSurname.setAttribute('minlength', '3')
                inputSurname.setAttribute('maxlength', '25')
                btnEditSurname.appendChild(inputSurname)
                btnEditApellido.setAttribute('hidden', '')

                //Input en Materia
                let inputSubject = document.createElement('input')
                inputSubject.classList.add('container')
                inputSubject.setAttribute('required', '')
                inputSubject.setAttribute('minlength', '3')
                inputSubject.setAttribute('maxlength', '25')
                btnEditSubject.appendChild(inputSubject)
                btnEditMateria.setAttribute('hidden', '')

                //Input en Nota primer parcial
                let inputNota1 = document.createElement('input')
                inputNota1.classList.add('container')
                inputNota1.setAttribute('min', '1')
                inputNota1.setAttribute('max', '10')
                inputNota1.setAttribute('pattern', '[0-9]')
                inputNota1.setAttribute('required', '')
                btnEditSujectOne.appendChild(inputNota1)
                btnEditMateria1.setAttribute('hidden', '')

                //Input en Nota segundo parcial
                let inputNota2 = document.createElement('input')
                inputNota2.classList.add('container')
                inputNota2.setAttribute('min', '1')
                inputNota2.setAttribute('max', '10')
                inputNota2.setAttribute('pattern', '[0-9]')
                inputNota2.setAttribute('required', '')
                btnEditSubjectTwo.appendChild(inputNota2)
                btnEditMateria2.setAttribute('hidden', '')

                //Input en Nota tercer parcial
                let inputNota3 = document.createElement('input')
                inputNota3.classList.add('container')
                inputNota3.setAttribute('min', '1')
                inputNota3.setAttribute('max', '10')
                inputNota3.setAttribute('pattern', '[0-9]')
                inputNota3.setAttribute('required', '')
                btnEditSubjectThree.appendChild(inputNota3)
                btnEditMateria3.setAttribute('hidden', '')


                //Funcionalidad boton cancel
                btnCancel.onclick = ()=>{
                    //Mostrar botones y ocultar los de confirmar y cancelar
                    btnDelete.removeAttribute('hidden', '')
                    btnEdit.removeAttribute('hidden', '')
                    btnConfirm.setAttribute('hidden', '')
                    btnCancel.setAttribute('hidden', '')

                    //Mostrar valores cargados previamente y ocular input
                    btnEditNombre.removeAttribute('hidden', '')
                    btnEditApellido.removeAttribute('hidden', '')
                    btnEditMateria.removeAttribute('hidden', '')
                    btnEditMateria1.removeAttribute('hidden', '')
                    btnEditMateria2.removeAttribute('hidden', '')
                    btnEditMateria3.removeAttribute('hidden', '')

                    inputName.setAttribute('hidden', '')
                    inputSurname.setAttribute('hidden', '')
                    inputSubject.setAttribute('hidden', '')
                    inputNota1.setAttribute('hidden', '')
                    inputNota2.setAttribute('hidden', '')
                    inputNota3.setAttribute('hidden', '')
                }

                //Funcionalidad boton confirm
                btnConfirm.onclick= ()=>{
                    if((inputName.value!=='') || (inputSurname.value!=='') || (inputSubject.value!=='') || (inputNota1.value!=='') || (inputNota2.value!=='') || (inputNota3.value!=='')){
                        //Elimina la clase invalid
                        inputName.classList.remove('invalid')
                        inputSurname.classList.remove('invalid')
                        inputSubject.classList.remove('invalid')
                        inputNota1.classList.remove('invalid')
                        inputNota2.classList.remove('invalid')
                        inputNota3.classList.remove('invalid')

                        //Capturamos los valores de los input
                        let inputNameValue=inputName.value
                        let inputSurnameValue=inputSurname.value
                        let inputSubjectValue=inputSubject.value
                        let inputNota1Value=inputNota1.value
                        let inputNota2Value=inputNota2.value
                        let inputNota3Value=inputNota3.value

                        //Logica del promedio y del estado de la materia

                        let promedio = (parseInt(inputNota1.value)+parseInt(inputNota2.value)+parseInt(inputNota3.value))/3

                        let resultado

                        promedio.toFixed(2) > 6 ? resultado = 'Aprobado' : resultado = 'Reprobado'
                
                        valoresArray.push(resultado)

                        //Escribimos en el DOM

                        btnEditNombre.innerText=inputNameValue
                        btnEditApellido.innerText = inputSurnameValue
                        btnEditMateria.innerText = inputSubjectValue
                        btnEditMateria1.innerText = inputNota1Value
                        btnEditMateria2.innerText = inputNota2Value
                        btnEditMateria3.innerText = inputNota3Value
                        btnEditPromedio.innerText = promedio.toFixed(2)
                        btnEditEstado.innerText = resultado


                        //Mostrar botones y ocultar los de confirmar y cancelar
                        btnDelete.removeAttribute('hidden', '')
                        btnEdit.removeAttribute('hidden', '')
                        btnConfirm.setAttribute('hidden', '')
                        btnCancel.setAttribute('hidden', '')

                        //Mostrar nuevos valores cargados  y ocular input
                        btnEditNombre.removeAttribute('hidden', '')
                        btnEditApellido.removeAttribute('hidden', '')
                        btnEditMateria.removeAttribute('hidden', '')
                        btnEditMateria1.removeAttribute('hidden', '')
                        btnEditMateria2.removeAttribute('hidden', '')
                        btnEditMateria3.removeAttribute('hidden', '')

                        inputName.setAttribute('hidden', '')
                        inputSurname.setAttribute('hidden', '')
                        inputSubject.setAttribute('hidden', '')
                        inputNota1.setAttribute('hidden', '')
                        inputNota2.setAttribute('hidden', '')
                        inputNota3.setAttribute('hidden', '')

                        //Modifico el objeto:

                        alumnosLista[btnEditId-1]={
                            "nombre" : inputNameValue,
                            "apellido" : inputSurnameValue,
                            "materia" : inputSubjectValue,
                            "nota": {
                                "0":inputNota2Value,
                                "1":inputNota1Value,
                                "2":inputNota3Value
                            }
                        }

                    }else{
                        inputName.classList.add('invalid')
                        inputSurname.classList.add('invalid')
                        inputSubject.classList.add('invalid')
                        inputNota1.classList.add('invalid')
                        inputNota2.classList.add('invalid')
                        inputNota3.classList.add('invalid')
                    }

                }

            }
            

            // Primer For con la intención de escribir los datos obtenidos en los primeros 3 input
            // cuyos valores son el nombre, apellido y materia del alumno

            for (let i = 0; i < 3; i++) {


                let nuevaLista = document.getElementById(`${idAlumno}`)
                let ul = document.createElement('ul')
                nuevaLista.appendChild(ul)
                ul.classList.add('col-sm', 'border', 'border-secondary')


                let li = document.createElement('li')
                let liText = document.createTextNode(valores[i])
                li.appendChild(liText)
                ul.appendChild(li)
                li.classList.add('col-sm', 'items')

            }

            // En nuestro segundo For, tomamos lo contenido en la variable anterior, cuyo contenido es una
            // matriz, la dividimos en un array plano y con eso lo impimimos en el DOM.


            for (const elemento of valoresArray.flat()) {
                let nuevaLista = document.getElementById(`${idAlumno}`)
                let ul = document.createElement('ul')
                nuevaLista.appendChild(ul)
                ul.classList.add('col-sm', 'border', 'border-secondary')

                let li = document.createElement('li')
                let liText = document.createTextNode(elemento)
                li.appendChild(liText)
                ul.appendChild(li)
                li.classList.add('col-sm', 'items')
            }



        }

        nuevoAlumno()

        //Limpiamos el formulario
        document.getElementById('formularioAlumno').reset()
    } else {
        nombre.classList.add('invalid')
        apellido.classList.add('invalid')
        materia.classList.add('invalid')
        nota1.classList.add('invalid')
        nota2.classList.add('invalid')
        nota3.classList.add('invalid')
    }
})


//Funcionalidad de guardar todos los alumnos cargados.
let btnGuardar = document.getElementById('btnGuardar')

btnGuardar.addEventListener('click', () => {
    // GUARDO LOS ALUMNOS EN EL LOCAL STORAGE BAJO UN MISMO ID y escribimos el DOM

    localStorage.setItem('alumnosLista', JSON.stringify(alumnosLista))
    let alumnosCargados = document.querySelector('.alumnosCargados')
    let divAlumnosCargados = alumnosCargados.querySelectorAll('div')
    let cantidad = divAlumnosCargados.length
    let alumnosGuardados = document.getElementById('alumnosGuardados')
    for(i = 0; i< cantidad; i++){
        document.getElementById(`${i+1}`).innerHTML=""
    }
    alumnosGuardados.innerHTML=''
    escribirGuardados()
})


//Funcionalidad del buscador, el mismo será por nombre y/o apellido

let buscador = document.getElementById('buscar')
let inputSearch = document.getElementById('search')
let modalResultado = document.getElementById('modalResultado')
let modall = document.getElementById('modall')
let cerrarModal = document.getElementById('cerrarModal')
let containerResultado = document.getElementById('containerResultado')

buscador.addEventListener('click', (e) => {
    e.preventDefault()
    modalResultado.classList.add('modall--show')

    let alumnoBuscar = inputSearch.value
    let contador = 0
    let listado= JSON.parse(listaGuardada)


    for (let i in listado) {
        let alumno = listado[i]
        let nombreAlumno = alumno.nombre.toLowerCase()
        let apellidoAlumno = alumno.apellido.toLowerCase()

        if ((alumnoBuscar.length != 0 && nombreAlumno.length != 0)) {
            if (((nombreAlumno.search(alumnoBuscar.toLowerCase())) != -1) || ((apellidoAlumno.search(alumnoBuscar.toLowerCase())) != -1)) {
                contador += 1
                //Creamos un contenedor que luego usaremos para eliminar y limpiar los resultados sin tener que refrescar la pantalla

                let divModalContainer = document.createElement('div')
                divModalContainer.classList.add('row')
                divModalContainer.setAttribute('id', 'modallContainer')
                modall.appendChild(divModalContainer)



                //Titulo del modal
                if((contador === 1)){
                    let text = document.getElementById('titleDefault')
                    text.innerText = 'Alumno encontrado:'
                }else{
                    let text = document.getElementById('titleDefault')
                    text.innerText = 'Alumnos encontrados:'
                }

                //Realizamos la operación de iterar y sumar las notas y luego obtener el promedio

                let notaTotal = parseInt(alumno.nota[0])+parseInt(alumno.nota[1])+parseInt(alumno.nota[2])
                let promedio = notaTotal / 3


                //Mostramos cada uno de los alumnos con su respectivo nombre, apellido, materia y estado

                let modallContainer = document.getElementById('modallContainer')
                let ul1 = document.createElement('ul')
                modallContainer.appendChild(ul1)
                ul1.classList.add('col-sm', 'border', 'border-success', 'modall__paragraph', 'p-1','m-0')

                let li1 = document.createElement('li')
                let li1text = document.createTextNode(`Nombre: ${alumno.nombre}`)
                li1.appendChild(li1text)
                ul1.appendChild(li1)
                li1.classList.add('col-sm', 'items')

                let ul2 = document.createElement('ul')
                modallContainer.appendChild(ul2)
                ul2.classList.add('col-sm', 'border-top', 'border-bottom', 'border-success', 'modall__paragraph', 'p-1', 'm-0')


                let li2 = document.createElement('li')
                let li2text = document.createTextNode(`Apellido: ${alumno.apellido}`)
                li2.appendChild(li2text)
                ul2.appendChild(li2)
                li2.classList.add('col-sm', 'items')

                let ul3 = document.createElement('ul')
                modallContainer.appendChild(ul3)
                ul3.classList.add('col-sm', 'border', 'border-success', 'modall__paragraph', 'p-1', 'm-0')


                let li3 = document.createElement('li')
                let li3text = document.createTextNode(`Materia: ${alumno.materia}`)
                li3.appendChild(li3text)
                ul3.appendChild(li3)
                li3.classList.add('col-sm', 'items')


                let ul4 = document.createElement('ul')
                modallContainer.appendChild(ul4)
                ul4.classList.add('col-sm', 'border-top', 'border-bottom', 'border-success', 'modall__paragraph', 'p-1', 'm-0')

                let li4 = document.createElement('li')
                let li4text = document.createTextNode(`Promedio: ${promedio.toFixed(2)}`)
                li4.appendChild(li4text)
                ul4.appendChild(li4)
                li4.classList.add('col-sm', 'items')

                //Resultado es el estado en que se encuentra la materia, se realiza mediante un ternario

                let resultado

                promedio.toFixed(2) > 6 ? resultado = 'Aprobado' : resultado = 'Reprobado'

                let ul5 = document.createElement('ul')
                modallContainer.appendChild(ul5)
                ul5.classList.add('col-sm', 'border', 'border-success', 'modall__paragraph', 'p-1', 'm-0')


                let li5 = document.createElement('li')
                let li5text = document.createTextNode(`Estado: ${resultado}`)
                li5.appendChild(li5text)
                ul5.appendChild(li5)
                li5.classList.add('col-sm', 'items')

                //Agregamos un elemento más para realizar un salto

                let salto = document.getElementById('modallContainer')
                let u6 = document.createElement('ul')
                salto.appendChild(u6)
            }
        }
    }
    if (contador === 0) {
        let text = document.getElementById('titleDefault').innerText
        titleDefault.innerText = 'Alumno no encontrado...'
    }




})

//Cierre de modal
cerrarModal.addEventListener('click', (e) => {
    e.preventDefault()
    modalResultado.classList.remove('modall--show')
    let divContenedor = document.getElementById('modallContainer')
    inputSearch.value = ''
    divContenedor.outerHTML=""

})

// Eliminar elemento

let btnEliminarUltimo = document.getElementById('btnEliminarUltimo')

btnEliminarUltimo.addEventListener('click', () => {

    Swal.fire({
        title: '¿Está seguro que desea elimiar el último alumno cargado?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById(`${idAlumno}`).innerHTML=""
            idAlumno -= 1
            alumnosLista.pop()
            Swal.fire({
                title: '¡Alumno borrado!',
                icon: 'success',
            })
        }else{
            Swal.fire({
                title: '¡No hay alumno para eliminar!',
                icon: 'alert',
            })
        }
    })
})
