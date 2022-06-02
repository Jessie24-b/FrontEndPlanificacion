import { MdDeleteForever } from 'react-icons/md'
import { GrDocumentDownload } from 'react-icons/gr'
import { deleteMempool } from "../service/mempoolService"
// import fileDownload from 'js-file-download'

var fileDownload = require('js-file-download');

export const CardDocumentComponent = ({ document }: any) => {

    const deleteMem = (id: string) => {

        deleteMempool(id);

    }

    const downloadMem = (base64: any,tipo:any) => {

        const byteString = window.atob(base64);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: tipo });

        //url funciona para abrirlo en una pestaña
        const url = URL.createObjectURL(blob);

        fileDownload(blob,'Prueba1.pdf')
    

        //window.open(url, '_blank');

    }


    const downloadPDF = (base64: string) => {
        const linkSource = `data:application/pdf;base64,${base64}`;
        const downloadLink = document.createElement('a');
        const fileName = "abc.pdf";
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }

    return (

        <div className="card align-items-center" style={{ width: '17rem' }}>
            <img src={"https://thumbs.dreamstime.com/b/carpeta-de-archivos-amarilla-con-los-documentos-34692828.jpg"}
                className="card-img-top" alt="..." height={'100px'} style={{ width: '100px' }} />
            <div className="card-body p-0">
                <h5 className="card-title">{document.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">propietario:{document.propietario}</h6>
                <h6 className="card-subtitle mb-2 text-muted">tipo:{document.tipo}</h6>
                <h6 className="card-subtitle mb-2 text-muted">fecha:{document.fecha}</h6>
                <h6 className="card-subtitle mb-2 text-muted">tamaño:{document.tamanio}</h6>
                <div className="row">
                    <div className="col-sm-6">
                        <button className=" btn-danger" onClick={() => deleteMem(document.id)}> <MdDeleteForever size={30} className="icons" /></button>
                    </div>
                    <div className="col-sm-6">
                        <button className=" btn-primary"> <GrDocumentDownload size={30} onClick={() => downloadMem(document.archivo,document.tipo)} className="icons" /></button>
                    </div>
                </div>
            </div>
        </div>

    )

}


