import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../../styles/components/FractieRij.css'
import Spacer from '../spacer/Spacer';
import { Link } from 'gatsby';
import Box from '@mui/material/Box';

export default function BoardRij() {
    return (
        <>
          <Typography paragraph variant="body3">The board of DAS is responsible for the organization around DAS and consists of the following people:</Typography>
          <Spacer spacing={2}/>
          <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                  <Card>
                      <Box padding={4}>
                  <Typography variant="h5">Deen Slenter</Typography>
                  <Typography>Chair</Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Card>
                      <Box padding={4}>
                  <Typography variant="h5">Iwan Bloksma</Typography>
                  <Typography>Secretary</Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Card>
                      <Box padding={4}>
                  <Typography variant="h5">Sam Bronckers</Typography>
                  <Typography>Treasurer</Typography>
                    </Box>
                  </Card>
                </Grid>
          </Grid>
          <Spacer spacing={2}/>
          <Typography paragraph variant="body3">To contact the board, send an email to <Link href="mailto:board@daseindhoven.nl">board@daseindhoven.nl</Link></Typography>

        </>
    )
}
