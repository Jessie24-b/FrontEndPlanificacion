import { GrDocumentDownload } from 'react-icons/gr'

var fileDownload = require('js-file-download');

export const CardBlockFileComponent = ({ document }: any) => {

    
 
    const extensionBlob = (tipo: any) => {
        let extensionText = "";
        if (tipo == "image/jpg") {
            extensionText = "jpg";
        }
        if (tipo == "application/pdf") {
            extensionText = "pdf";
        }
        if (tipo == "image/png") {
            extensionText = "png";
        }
        if(tipo=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
            extensionText="xlsx";        
        }
        if(tipo=="application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
            extensionText="docx"; 
        }
        if(tipo=="application/vnd.openxmlformats-officedocument.presentationml.presentation"){
            extensionText="pptx"; 
        }
        if(tipo=="text/plain"){
            extensionText="txt"; 

        }


        return extensionText;
    }

    const downloadMem = (base64: any, tipo: any) => {

        const byteString = window.atob(base64);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: tipo });

        //url funciona para abrirlo en una pestaña
        const url = URL.createObjectURL(blob);
        
        //validacion para el tipo de extension del archivo
        const extensionText = extensionBlob(tipo);
        fileDownload(blob, document.nombre)


        //window.open(url, '_blank');

    }


    return (

        <div className="card align-items-center" style={{ width: '17rem' }}>
             <label><input className="form-check-input" type="checkbox" id="cbox1" value={document.id} onChange={document.deleteMultiple}/> Seleccionar</label>
            <img src={"https://thumbs.dreamstime.com/b/carpeta-de-archivos-amarilla-con-los-documentos-34692828.jpg"}
                className="card-img-top" alt="..." height={'100px'} style={{ width: '100px' }} />
            <div className="card-body p-0">
                <h5 className="card-title">{document.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Nombre:{document.nombre}</h6>
                <h6 className="card-subtitle mb-2 text-muted">tipo:{document.tipo}</h6>
               
                <div className="row">
                    <div className="col-sm-6">
                        <button className=" btn-primary"> <GrDocumentDownload size={30} onClick={() => downloadMem(document.archivo, document.tipo)} className="icons" /></button>
                    </div>
                   
                </div>
               
           
            </div>
        </div>

    )

}


