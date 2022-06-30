export default interface Block{
    idBloque: number;
    fechaMinado: string;
    prueba: number;
    milisegundos: string;
    archivos: Array<string>;
    hashPrevio: string;
    hash: string;
}