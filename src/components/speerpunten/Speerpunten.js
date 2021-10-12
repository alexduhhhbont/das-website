import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import icon1 from '../../images/Education-visual-150x150.jpg'
import Typography from '@mui/material/Typography';

export default function Speerpunten() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card>
                    <CardMedia component="img" image={icon1} height="150" alt="fractieFoto"/>
                    <CardContent>
                        <Typography variant="h5">Flexible education for ambitious students</Typography>
                        <Typography paragraph variant="body1">We want to represent students like you, who believe studying is more than just academic learning. We see the need for flexible education, to enable ambitious students to decide when and how they study. Improving online education is one of the means to achieve this goal.</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                                <Card>
                    <CardMedia component="img" image={icon1} height="150" alt="fractieFoto"/>
                    <CardContent>
                        <Typography variant="h5">Flexible education for ambitious students</Typography>
                        <Typography paragraph variant="body1">We want to represent students like you, who believe studying is more than just academic learning. We see the need for flexible education, to enable ambitious students to decide when and how they study. Improving online education is one of the means to achieve this goal.</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                                <Card>
                    <CardMedia component="img" image={icon1} height="150" alt="fractieFoto"/>
                    <CardContent>
                        <Typography variant="h5">Flexible education for ambitious students</Typography>
                        <Typography paragraph variant="body1">We want to represent students like you, who believe studying is more than just academic learning. We see the need for flexible education, to enable ambitious students to decide when and how they study. Improving online education is one of the means to achieve this goal.</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                                <Card>
                    <CardMedia component="img" image={icon1} height="150" alt="fractieFoto"/>
                    <CardContent>
                        <Typography variant="h5">Flexible education for ambitious students</Typography>
                        <Typography paragraph variant="body1">We want to represent students like you, who believe studying is more than just academic learning. We see the need for flexible education, to enable ambitious students to decide when and how they study. Improving online education is one of the means to achieve this goal.</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
