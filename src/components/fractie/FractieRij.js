import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import fractie1 from '../../images/1.JoëlleBink.jpg'
import fractie2 from '../../images/25.SiebrenvanderWerf.jpg'
import fractie3 from '../../images/27.AlexdeBont.jpg'
import '../../styles/components/FractieRij.css'
import { Link } from 'gatsby';

export default function FractieRij() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
              <Link className="fractionLink" to="/party/fraction">
                <Card style={{position: "relative"}} className="fractionCard">
                  <div className='nameStroke'><span className='nameSide'>Joëlle Bink</span><span className='nameCenter'>Joëlle Bink</span><span className='nameSide'>Joëlle Bink</span></div>
                    <CardMedia component="img" image={fractie1} height="500" alt="fractieFoto"/>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link className="fractionLink" to="/party/fraction">
                <Card style={{position: "relative"}} className="fractionCard">
                  <div className='nameStroke'><span className='nameSide'>Siebren van der Werf</span><span className='nameCenter'>Siebren van der Werf</span><span className='nameSide'>Siebren van der Werf</span></div>
                    <CardMedia component="img" image={fractie2} height="500" alt="fractieFoto"/>
                </Card>
                </Link>
            </Grid>
            <Grid item xs={4}>
              <Link className="fractionLink" to="/party/fraction">
                <Card style={{position: "relative"}} className="fractionCard">
                  <div className='nameStroke'><span className='nameSide'>Alex de Bont</span><span className='nameCenter'>Alex de Bont</span><span className='nameSide'>Alex de Bont</span></div>
                    <CardMedia component="img" image={fractie3} height="500" alt="fractieFoto"/>
                </Card>
              </Link>
            </Grid>
        </Grid>
    )
}
