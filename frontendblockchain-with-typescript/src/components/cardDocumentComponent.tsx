import {MdDeleteForever} from 'react-icons/md'
import {GrDocumentDownload} from 'react-icons/gr'



export const CardDocumentComponent = ({document}: any) => {
  
    const deleteMem=()=>{
      
       
        //deleteMempool("62959bf02c0732f751f2f99c");
    }
    return(
        
        <div className="card align-items-center" style={{width: '17rem'}}>
                   <img src={"https://thumbs.dreamstime.com/b/carpeta-de-archivos-amarilla-con-los-documentos-34692828.jpg"}
                    className="card-img-top" alt="..." height={'100px'} style={{width: '100px'}}/>
                       <div className="card-body p-0">
                           <h5 className="card-title">{document.id}</h5>
                           <h6 className="card-subtitle mb-2 text-muted">propietario:{document.propietario}</h6>
                           <h6 className="card-subtitle mb-2 text-muted">tipo:{document.tipo}</h6>
                           <h6 className="card-subtitle mb-2 text-muted">fecha:{document.fecha}</h6>
                           <h6 className="card-subtitle mb-2 text-muted">tamaño:{document.tamanio}</h6>
                          <div className="row">
                          <div className="col-sm-6">
                           <button className=" btn-danger" onClick={deleteMem}> <MdDeleteForever size={30} className="icons"/></button>
                           </div>
                           <div className="col-sm-6">
                           <button className=" btn-primary"> <GrDocumentDownload size={30} className="icons"/></button>
                           </div>
                          </div>                              
                       </div>
               </div>
   
)
  
}


