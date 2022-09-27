import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material/CardContent';

function HomefeedCard(){
    return (
        <Card sx={{display:'flex'}}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <CardContent sx={{flex:'1 0 auto'}}>

                </CardContent>
            </Box>
        </Card>
    );
}

export default HomefeedCard;