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

function RoomCard(props){
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

    
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };
    
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '13vh' }}

        >
            <Grid item xs={3}>
                <Card style={{ width: '40rem'}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                        { props.user.name }
                        </Typography>
                        <Typography sx={{ mb: 0.4 }} color="text.secondary">
                        Not available for use
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
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

export default RoomCard;