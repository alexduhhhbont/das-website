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
import Spacer from '../spacer/Spacer';
import { Link } from 'gatsby';

export default function BoardRij() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
              <Link className="fractionLink" to="/party/board">
                <Card style={{position: "relative"}} className="fractionCard">
                  <div className='nameStroke'><span className='nameSide'>Lucas Poppelaars</span><span className='nameCenter'>Lucas Poppelaars</span><span className='nameSide'>Lucas Poppelaars</span></div>
                    <CardMedia component="img" image={fractie1} height="500" alt="fractieFoto"/>
                </Card>
                <Spacer spacing={1}/>
                <h3 className="functionTitle">Secretary</h3>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link className="fractionLink" to="/party/board">
                <Card style={{position: "relative"}} className="fractionCard">
                  <div className='nameStroke'><span className='nameSide'>Imke Bloemen</span><span className='nameCenter'>Imke Bloemen</span><span className='nameSide'>Imke Bloemen</span></div>
                    <CardMedia component="img" image={fractie2} height="500" alt="fractieFoto"/>
                </Card>
                <Spacer spacing={1}/>
                <h3 className="functionTitle">Chair</h3>
                </Link>
            </Grid>
            <Grid item xs={4}>
              <Link className="fractionLink" to="/party/board">
                <Card style={{position: "relative"}} className="fractionCard">
                  <div className='nameStroke'><span className='nameSide'>Sven Leenman</span><span className='nameCenter'>Sven Leenman</span><span className='nameSide'>Sven Leenman</span></div>
                    <CardMedia component="img" image={fractie3} height="500" alt="fractieFoto"/>
                </Card>
                <Spacer spacing={1}/>
                <h3 className="functionTitle">Treasurer</h3>
              </Link>
            </Grid>
        </Grid>
    )
}
