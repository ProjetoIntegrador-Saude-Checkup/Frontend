import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import Tema from '../../../models/Tema';
import './ListarTema.css';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

function ListaTemas() {
  const [temas, setTemas] = useState<Tema[]>([])

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )
  let navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
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


  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getTemas()
  }, [temas.length])

  return (
    <><div className="marge">

      {
        temas.map(temas => (
          <Box m={2}>
            <Card variant="outlined" className="cx">
              <CardContent>
                <Typography variant="h4" component="h2">
                  {temas.assunto}
                </Typography>

              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioTema/${temas.id}`} className="botaoatcan">
                    <Box mx={1} >
                      <ModeEditOutlineOutlinedIcon />
                    </Box>

                  </Link>
                  <Link to={`/deletarTema/${temas.id}`} className="botaoatcan">
                    <Box mx={1}>
                      <DeleteIcon />
                    </Box>

                  </Link>

                </Box>
              </CardActions>
            </Card>
            <Link to={`/formularioTema/`} >
              <Box>
                <AddCircleOutlinedIcon className="botaoadd" />
              </Box>

            </Link>
          </Box>
        ))
      }
</div>
    </>
  );
}


export default ListaTemas;