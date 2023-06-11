import Tema from './Tema'
import User from './User';

interface Postagem{
    id: number; 
    titulo: string; /*só vai aceitar titulo com mais de 2 letras*/
    texto: string; /*só vai aceitar texto com mais de 2 letras*/
    data: string;
    tema?: Tema| null;
    usuario?: User | null;
}

export default Postagem;
