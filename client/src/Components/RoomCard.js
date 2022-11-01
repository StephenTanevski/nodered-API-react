import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';

// passes in the selcted room as a prop.
function RoomCard(props){
    if(props.room.temperature < 27){ // rooms are considered available if temp is less than 27. 
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
                            Room { props.room.room } {/* displays room name/number. */}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Currently available for use <br></br>
                            {props.room.timestamp}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" component={Link} to={`/overview/${ props.room.id}`}>Select Room</Button> {/* button links to overview page where it is dynamically routed according to room id. */}
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export default RoomCard;