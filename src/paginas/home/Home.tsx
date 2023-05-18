import { Grid } from '@material-ui/core';
import Carrossel from '../../components/carrossel/Carrossel';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container style={{ marginTop: "3px", marginBottom: "2px" }}>
                <Grid item xs={12}>
                    <Carrossel />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;