import swal from 'sweetalert2'
const sweetAlert=()=>{ 
    swal.fire({  
        position: 'center',
        icon: 'success',
        title: 'AGREGADO CORRECTAMENTE',
        showConfirmButton: false,
        timer: 1500
      })

 }
 const sweetAlertError=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'TODOS LOS CAMPOS SON NECESARIOS',
      showConfirmButton: false,
      timer: 1500
    })
    

}
const sweetAlertLogin=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'NO ESTAS REGISTRADO',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const sweetAlertcatch=()=>{
    swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'NO SE REALIZO EL REGISTRO',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const sweetAlertSesion=()=>{ 
 
    swal.fire({
      title: 'Tu Sesion Expiro',
      text: "INICIA SESION NUEVAMENTE",
      icon: 'warning',
      timer: 1500
      
    } )
 }
 const sweetAlerId=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'EL NUMERO DE CONTRATO ES NECESARIO',
      showConfirmButton: false,
      timer: 1500
    })
    

}
const sweetAlerApartado=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'PROYECTO, LOTE E IMPORTE  SON OBLIGATORIOS',
      showConfirmButton: false,
      timer: 1500
    })
    


}
const sweetAlerGenerarApartado=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'NOMBRE y APELLIDO PATERNO SON OBLIGATORIOS',
      showConfirmButton: false,
      timer: 1500
    })
    

}
const sweetAlerCLienteNoEncontrado=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: 'NO SE ENCONTRO EL CLIENTE VERIFIQUE QUE LOS DATOS SON CORRECTOS',
      showConfirmButton: false,
      timer: 1500
    })
    


}
const sweetAlerCLienteAutenticacion=()=>{ 
  swal.fire({  
      position: 'center',
      icon: 'error',
      title: ' VERIFICA TUS DATOS',
      showConfirmButton: false,
      timer: 1500
    })
    


}

  export {  
    sweetAlert,
    sweetAlertError,
    sweetAlertLogin,
    sweetAlertcatch,
    sweetAlertSesion,
    sweetAlerId,
    sweetAlerApartado,
    sweetAlerGenerarApartado,
    sweetAlerCLienteNoEncontrado,
    sweetAlerCLienteAutenticacion

  
  }