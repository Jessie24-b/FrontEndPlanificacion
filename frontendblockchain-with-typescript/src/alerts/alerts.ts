import Swal from 'sweetalert2'

export function alertMessage(message: string, _icon: any) {
    return Swal.fire({
        title: message,
        icon: _icon,
        timer: 2000,
        showConfirmButton: false,
        position: 'top-end',
        width: 330,
        color: '#716add',
    })

}

export function alertQuestion(message: string,messageConfirm:string,actionMessage:string){
    return Swal.fire({
        title: message,
        showDenyButton: true,
        denyButtonText: 'Cancelar',
        confirmButtonText: messageConfirm,
        
    }).then((result) => {
       
        if (result.isConfirmed) {
          Swal.fire(actionMessage, '', 'success')
        }
})

}




