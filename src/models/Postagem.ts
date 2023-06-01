import Tema from './Tema'

interface Postagem{
    id: number; 
    titulo: string; /*só vai aceitar titulo com mais de 2 letras*/
    texto: string; /*só vai aceitar texto com mais de 2 letras*/
    data: string;
    tema?: Tema| null
}

export default Postagem;
