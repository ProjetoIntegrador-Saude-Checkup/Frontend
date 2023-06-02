interface Tema{
    data: string | number | Date;
    id: number;
    assunto: string; /*só vai aceitar texto com mais de 5 letras*/
    status?: boolean; //(não obrigatorio, true or false) 
}

export default Tema;