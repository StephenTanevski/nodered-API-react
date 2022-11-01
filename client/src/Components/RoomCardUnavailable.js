import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// passes the selected room as a prop.
function RoomCard(props){
    // Expand animation for unavailable rooms. 
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    }));

    //create useState for expand button. Automatically set to false
    const [expanded, setExpanded] = React.useState(false);

    // if expand button is click than expand card to show relavent information. 
    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    // rooms are considered unavailable if temperature is equal or more than 27.
    if(props.room.temperature >= 27){
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
                            Room { props.room.room } {/* displays room name/number from API. */}
                            </Typography>
                            <Typography sx={{ mb: 0.4 }} color="text.secondary">
                            Not available for use<br></br>
                            {props.room.timestamp} 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" component={Link} to={`/overview/${ props.room.id}`}>View Room</Button> {/* button links to overview page where it is dynamically routed according to room id. */}
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                > {/* button links to overview page where it is dynamically routed according to room id. */}
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            {/* information that is displayed after expanding card */}
                            <CardContent>
                                <Typography paragraph><b>Patient Information:</b></Typography>
                                <Typography paragraph>
                                    Fusce at blandit sapien, non pulvinar odio. Fusce vel quam sit amet quam tristique dictum ut ac quam. Nulla ullamcorper nibh sagittis pellentesque molestie.
                                </Typography>
                                <Typography paragraph><b>Purpose of booking:</b></Typography>
                                <Typography paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eleifend dolor, nec interdum neque. Phasellus commodo velit enim. 
                                    Nullam nec urna lorem. Sed egestas dolor ac dolor pulvinar rhoncus. Phasellus fermentum enim eu sem interdum interdum. Etiam sodales nulla vel malesuada mollis. 
                                    Nulla cursus venenatis ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vitae fringilla purus. Vivamus ultricies erat id metus egestas semper. 
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export default RoomCard;