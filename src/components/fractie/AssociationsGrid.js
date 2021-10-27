import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import fractie1 from '../../images/1.JoëlleBink.jpg'
import '../../styles/components/AssociationGrid.css'
import Spacer from '../spacer/Spacer';
import { Link } from 'gatsby';

export default function AssociationsGrid() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
              <Link className="associationLink" to="/party/board">
                <Card style={{position: "relative"}} className="associationCard">
                    <CardMedia component="img" image={fractie1} height="200" alt="fractieFoto"/>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link className="associationLink" to="/party/board">
                <Card style={{position: "relative"}} className="associationCard">
                    <CardMedia component="img" image={fractie1} height="200" alt="fractieFoto"/>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link className="associationLink" to="/party/board">
                <Card style={{position: "relative"}} className="associationCard">
                    <CardMedia component="img" image={fractie1} height="200" alt="fractieFoto"/>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link className="associationLink" to="/party/board">
                <Card style={{position: "relative"}} className="associationCard">
                    <CardMedia component="img" image={fractie1} height="200" alt="fractieFoto"/>
                </Card>
              </Link>
            </Grid>
        </Grid>
    )
}
