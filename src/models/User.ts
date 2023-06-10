import Postagem from "./Postagem";

//atributos necessários para validar as colunas de cadastro no bd
interface User{
  id: number
  nome: string
  foto: string
  usuario: string
  senha: string
  postagens?: Postagem[];
}

export default User;
