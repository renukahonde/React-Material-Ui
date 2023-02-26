import { Button, Card, CardActions, CardContent,  Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';



const useStyles=makeStyles({
    title:{
        fontsize:40,
        fontFamily:"Montserrat"
    },
    cover:{
        backgroundPosition:"center",
        padding:"35px 25px",
        backgroundImage:'url(https://www.istockphoto.com/photo/car-accident-crash-gm157180797-1647108?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&utm_term=random%3A%3A%3A)'
    }
})
function FeaturedPost() {
    const classes = useStyles();

  return (
    <Card  className= {classes.cover} >
        <CardContent  className= {classes.textContainer}>
            <Typography  className= {classes.title} gutterBottom > Title of featured blog </Typography>
                <Typography>
                    Multiple line will be here quickly and vislble clearly

                </Typography>
           
        </CardContent>
        <CardActions>
            <Button variant="text" className= {classes.btn}>
                Read more..
            </Button>
        </CardActions>
    </Card>
  )
}

export default FeaturedPost
