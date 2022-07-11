import Swal from 'sweetalert2'

export function alertMessage(message: string, _icon: any) {
    return Swal.fire({
        title: message,
        icon: _icon,
        timer: 4000,
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


export function information(hashPrevio: string,hash: string,idBloque:number) {
    return Swal.fire({

        title: 'Detalles del bloque #'+idBloque,
        html:`<b><span>Hash previo: </span></b>${hashPrevio}<br>
        <b><span>Hash: </span></b>  ${hash}`,
        showConfirmButton: true,
        width: 400,
       
    })

}




