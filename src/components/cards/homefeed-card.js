import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
function HomefeedCard(){
    return (
        <Card sx={{display:'flex', width:'98%', margin:'10px auto', height:'150px'}}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <CardContent sx={{flex:'1 0 auto'}}>
                <Typography component="div" sx={{fontSize:'1.5em',}}>
                    Importance Of Calculations
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{overflow:'hidden'}} component="div">
                     Basic Calculations are immensely important for the early growth of children.
                </Typography>
                </CardContent>
            </Box>
            <CardContent sx={{flex:'1 0 auto'}}>
            <CardMedia
                component="img"
                sx={{width:150,height:150}}
                src={require('../../images/calup.png')}
                alt="Live from space album cover"
            />
            </CardContent>  
        </Card>
    );
}

export default HomefeedCard;