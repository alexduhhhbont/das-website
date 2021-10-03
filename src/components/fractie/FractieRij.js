import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import fractie1 from '../../images/1.JoëlleBink.jpg'

export default function FractieRij() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card>
                    <CardMedia component="img" image={fractie1} height="300" alt="fractieFoto"/>
                    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardMedia component="img" image={fractie1} height="300" alt="fractieFoto"/>
                    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardMedia component="img" image={fractie1} height="300" alt="fractieFoto"/>
                    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
