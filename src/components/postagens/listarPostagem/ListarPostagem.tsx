import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import {Card, CardActions, CardContent, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListarPostagem.css';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Navbar from '../../estaticos/navbar/Navbar';
import { addToken } from '../../../store/token/Action';

function ListaPostagem() {
  
  let navigate = useNavigate();
  const [posts, setPosts] = useState<any[]>([])

  const dispatch = useDispatch()

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )
  


  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado para continuar!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token])

  async function getPost() {
    try {
      await busca('/postagens', setPosts, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.response?.status === 403) {
        dispatch(addToken(''))
      }
    }
  }


  useEffect(() => {

    getPost()

  }, [posts.length])


  return (
    <><div className="marge">
      {
        
        posts.map(post => (
         
          <Box mx={5} >
            <Card variant="outlined" className="caixa" >
                <CardContent >
                <Typography variant="body1" component="p">
                    {post.tema?.assunto}
                  </Typography>
                  <Typography variant="h4" component="h4" gutterBottom>
                    {post.titulo}
                  </Typography>
                  <Typography variant="body1" component="p">
                    {post.texto}
                  </Typography>
                  <Typography variant="h6" component="h6">
                  Data: {Intl.DateTimeFormat('pt-BR', { }).format(new Date(post.data))}
                </Typography>

                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>

                    <Link to={`/formularioPostagem/${post.id}`} className="botaoatucan">
                      <Box mx={1} >
                          <ModeEditOutlineOutlinedIcon/>
                      </Box>
                    </Link>
                    <Link to={`/deletarPostagem/${post.id}`} className="botaoatucan">
                      <Box mx={1}>
                          <DeleteIcon />
                      </Box>
                    </Link>
                  </Box>
               
              </CardActions> 
              
             </Card>              
            
              <Link to={`/formularioPostagem`}  >
                <Box>
                  <AddCircleOutlinedIcon className="botaoadicionar"/>
                </Box>
              </Link>
          </Box>
        ))
        
      }</div>
    </>
  )
}

export default ListaPostagem;