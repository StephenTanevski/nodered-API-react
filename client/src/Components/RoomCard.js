import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';

function RoomCard(props){
    if(props.room.temperature < 27){
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '14vh' }}
            >
                <Grid item xs={3}>
                    <Card style={{ width: '40rem'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Room { props.room.room }
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Currently available for use <br></br>
                            {props.room.timestamp}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" component={Link} to={`/overview/${ props.room.id}`}>Select Room</Button> {/*component={Link} to={`/overview/${ props.user.id}`}*/}
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export default RoomCard;