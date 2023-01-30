import swal from 'sweetalert2'
const sweetAlert=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'success',
        title: 'Agregado Correctamente',
        showConfirmButton: false,
        timer: 1500
      })

 }
 const sweetAlertError=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'Todos los campos son necesarios',
      showConfirmButton: false,
      timer: 1500
    })
    

}
const sweetAlertLogin=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'No estas registrado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const sweetAlertcatch=()=>{
    swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'No se realizo el registro',
      showConfirmButton: false,
      timer: 1500
    })
  }
  export {  
    sweetAlert,
    sweetAlertError,
    sweetAlertLogin,
    sweetAlertcatch
  }