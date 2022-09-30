import React from "react";
import Card from '@mui/material/Card';


function QuestionCard(props){
    return <Card sx={{
        minWidth:275,
        minHeight:200,
        height:"auto",
        width:"88%",
        padding:"3%",
        backgroundColor:"#9370DB",
        marginTop:5
        }}>
            {props.children}
    </Card>
}

export default QuestionCard;