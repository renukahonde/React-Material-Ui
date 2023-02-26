// import { Grid, Link, Paper, Typography } from '@mui/material';
// import React from 'react'
// import { makeStyles } from '@mui/styles';



// const useStyles=makeStyles({
//   // card:{
//   //     display:"flex",

//   // },
//   // cardDetails:{
//   //   flex:1,  
//   // },
//   // cardMedia:{
//   //     width:150,
//   // }
// });
// function Sidebar(archives,description,social,title) {
//   const classes=useStyles();

//   return (
//     <Grid item  xs={12} md={4}>
//       <Paper elevation={0} className={classes.sidebarAboutBox}>
//         <Typography variant='="h6' gutterBottom>
//           {title}
//         </Typography>
//         <Typography>
//           {description}
//         </Typography>

//       </Paper>
//       <Typography variant='h6' gutterBottom className={classes.sidebarSection}>
//          Archives
//       </Typography>
//       {archives.map((archive)=>(
//         <Link 
//         display="block"
//         variant='body1'
//         href={archive.url}
//         key={archive.title}
//         >
//           {archive.title}
        
//         </Link>
//       )
//       )}
//       <Typography variant='h6' gutterBottom className={classes.sidebarSection}>
//           social
//       </Typography>
//       {social.map((network)=>(
//         <Link display="block " variant='body1' href="#" key={network.name}>
//            <Grid container direction="row" alignItem="centre">
//             <Grid item>
//               <network.icon/>

//             </Grid>
//             <Grid  item>
//               {network.name}
//             </Grid>

//            </Grid>
//         </Link>
//       ))}

//     </Grid>
//   )
// }

// export default Sidebar


import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, Link, Paper, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
