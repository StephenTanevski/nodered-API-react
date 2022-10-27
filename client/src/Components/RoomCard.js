import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

function RoomCard(props){
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '15vh' }}
        >
            <Grid item xs={3}>
                <Card style={{ width: '40rem'}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                        { props.user.name }
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Currently available for use
                        </Typography>
                        <Typography variant="body2">
                        placeholder text.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default RoomCard;