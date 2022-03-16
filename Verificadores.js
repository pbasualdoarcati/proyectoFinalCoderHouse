const btnAlumno = document.getElementById('btnAlumno')
const verificar = () =>{

    if ((document.getElementById('nota1')==='') || (document.getElementById('nota2') ==='') || (document.getElementById('nota3')==='') ) {
        btnAlumno.disable = true
    }else{
        btnAlumno.disable = false
    }
    
    if ((document.getElementById('nota1')>10) || (document.getElementById('nota2') >10) || (document.getElementById('nota3')>10) ) {
        btnAlumno.disable = true
    }else{
        btnAlumno.disable = false
    }
}

verificar()