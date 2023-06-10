//atributos necessários para validar o login
interface UserLogin {
  id: number
  nome: string
  usuario: string
  senha: string
  foto: string
  token: string
}

export default UserLogin;