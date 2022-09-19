import React,{useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { getTimer } from '../../features/basic-ops/timer-slice';
const SetTimer = (props)=>{
    const [timer,setTimer] = useState(2);
    const dispatch = useDispatch();
    const onSelectTimerInput = (e)=>{   
      dispatch(getTimer(e.target.value));   
      setTimer(e.target.value);
    }

return(
    <Box sx={{ minWidth: 200 }}>
    <FormControl fullWidth>
      <InputLabel id="timer-app">Select time</InputLabel>
      <Select
        labelId="timer-app-label"
        id="timer-app-id"
        value={timer}
        label="select-timer"
        onChange={onSelectTimerInput}
      >
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
        <MenuItem value={4}>Four</MenuItem>
        <MenuItem value={5}>Five</MenuItem>
      </Select>
    </FormControl>
  </Box>);
}
export default SetTimer; 