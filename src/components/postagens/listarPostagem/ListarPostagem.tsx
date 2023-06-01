import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import {Card, CardActions, CardContent, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListarPostagem.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )
  let navigate = useNavigate();


  useEffect(() => {
    if (token == "") {
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
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])


  return (
    <>
      {
        posts.map(post => (

          <Box mx={5} >
            <Card variant="outlined" className="caixa" >
                <CardContent >
                  <Typography variant="h4" component="h4">
                    {post.tema?.assunto}
                  </Typography>
                  <Typography variant="h5" component="h4" gutterBottom>
                    {post.titulo}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post.texto}
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
      }
    </>
  )
}

export default ListaPostagem;