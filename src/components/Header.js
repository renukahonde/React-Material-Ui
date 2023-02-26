

import React from 'react'
import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';

const useStyles  = makeStyles((theme)=> ({
    title:{
        flexGrow:1,
    },
    tagline:{
        fontSize:20,
        textTransform:"uppercase",
        justifyContent:"center",
        fontFamily:"Montserrat"
    }
}));

function Header() {
    const classes=useStyles();

  return (
    <>
      <Toolbar>
           <IconButton color='inherit'>
            <MenuIcon/>
            </IconButton>
            <Typography variant='h6'className={classes.title}> 
            Blogging Website

            </Typography >
               <IconButton color='inherit'>
               <Badge badgeContent={4} color="primary">
               <NotificationsActiveIcon/>
                </Badge>
             </IconButton>
               
              <IconButton  color='inherit'><AccountCircleIcon/></IconButton>



           
      </Toolbar>
      <Divider/>
      <Toolbar> Express your Emotions through Words</Toolbar>

      
    </>
  )
}

export default Header

