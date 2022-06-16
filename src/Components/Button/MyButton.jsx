import { Button } from '@mui/material';
import React from 'react'
import '../Button/style.css';
const MyButton = (props) => {
  return (
    <Button variant="contained"
    onClick={props.onClick} 
    className='mybtn' placeholder=' Check Price!'
    margin={props.margin}
    fontSize={props.fontsize}
    color={props.color}
    >
   {props.txt}
   
  
      </Button>
  )
}

export default MyButton;
