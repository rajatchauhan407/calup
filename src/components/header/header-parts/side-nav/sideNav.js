import React, { useEffect, useState, useContext } from "react";
import Drawer from "@mui/material/Drawer";
import styles from "./sideNav.module.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CalculateIcon from '@mui/icons-material/Calculate';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import LogoutIcon from '@mui/icons-material/Logout';
import {NavLink } from "react-router-dom";
import AuthContext from "../../../../store/auth-context-new";
const SideNav = (props) => {
  const authCtx = useContext(AuthContext);
  let d = new Date();
  const [emailHeader, setEmailHeader] = useState("");
  const [date, setDate] = useState(`${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`) 
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if(localStorage.getItem('email')){
      const email = localStorage.getItem("email").split("@")[0];
      setEmailHeader(email);
    }
  },[setEmailHeader]);

  const logoutHandler = ()=>{
    authCtx.onLogout();
    closeHandler();
  }
  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Drawer anchor="left" open={visible} onClose={closeHandler}>
      <Box
        sx={{
          width:300,
          display: "flex",
          bgcolor: 'background.paper',
          flexDirection: "column",
          boxSizing:"border-box",
          padding:"0 16px 16px 16px"
        }}
      >
        {/* <Box 
          sx={{
            width:250,
            display:"flex",
            justifyContent:"flex-start"
          }}
        >
            avatar
        </Box> */}
        <List sx={{
            width:"100%"
        }}>
          <Card sx={{width:"100%"}}>
              <CardHeader
                title={`Hello, ${emailHeader}`}
                subheader={date}
              />
          </Card>
          <NavLink className={styles.sideLink} to="/multiply" onClick={closeHandler}>
          <ListItem disablePadding className={styles.listItem} >
            <ListItemButton >
              <ListItemIcon sx={{
                    minWidth:"30px"
                }}>
                <CalculateIcon/>
              </ListItemIcon>
              <ListItemText primary="Multiply" />
            </ListItemButton>
          </ListItem >
          </NavLink>
          <NavLink className={styles.sideLink} to="/divide" onClick={closeHandler}>
          <ListItem disablePadding className={styles.listItem} >
            <ListItemButton>
              <ListItemIcon sx={{
                    minWidth:"30px"
                }}>
                <CalculateIcon/>
              </ListItemIcon>
              <ListItemText primary="Divide" />
            </ListItemButton>
          </ListItem>
          </NavLink>
          <NavLink className={styles.sideLink} to="/add" onClick={closeHandler}>
          <ListItem disablePadding className={styles.listItem} >
            <ListItemButton>
              <ListItemIcon sx={{
                    minWidth:"30px"
                }}>
                <CalculateIcon/>
              </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItemButton>
          </ListItem>
          </NavLink>
          <NavLink className={styles.sideLink} to="/subtract" onClick={closeHandler}>
          <ListItem disablePadding className={styles.listItem} >
            <ListItemButton>
              <ListItemIcon sx={{
                    minWidth:"30px"
                }}>
                <CalculateIcon/>
              </ListItemIcon>
              <ListItemText primary="Subtract" />
            </ListItemButton>
          </ListItem>
          </NavLink>
          <ListItem disablePadding className={styles.listItem} >
            <ListItemButton onClick={logoutHandler}>
              <ListItemIcon sx={{
                    minWidth:"30px"
                }}>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNav;
