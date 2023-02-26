// import { Key } from '@mui/icons-material'
// import { Divider, Grid, Typography } from '@mui/material'
// import React from 'react'
// import { posts } from '../data/Data'
// //import {Markdown} from "markdown-to-jsx";
// //import ReactMarkdown from 'react-markdown'

// const Main=({title})=> {
//   return (
//     <Grid item xs={12} md={8}>
//       <Typography variant='"h6' gutterBottom>
//         {title}
//       </Typography>
//       <Divider/>
      
//         <Typography> 
//           RANDOM STUFF POSTED HERE
//         </Typography>
        
      



//     </Grid>
//   )
// }

// export default Main

import React from "react";
import { Divider, Grid, Typography } from '@mui/material'
import { posts } from "../data/Data";
//import Markdown from "markdown-to-jsx";

export default function Main({ title }) {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Typography>
      The sun is said to have the same age as the solar system. In other words, scientists believe it is four and a half billion years old. We derived this age from studying rocks from the moon which is also believed to have existed at the same age as the sun.

      The sun is basically a large sphere that glows because it contains hot gases. The major gases which make up the sun are hydrogen and helium. In other words, it has 70% hydrogen and 28% helium.
 
       It also contains other hot gases like carbon, oxygen, and nitrogen. Further, there are other elements like silicon, neon, sulfur and magnesium. The sun is a very bright star which is four hundred thousand times brighter than the full moon.

     We can measure the brightness of the stars in the solar system by using magnitudes. Thus, the magnitude of the sun is 26.74 which are very bright. It is also the reason why we can easily look at the moon with our bare eyes but not so easily at the sun.
      </Typography>
    </Grid>
  );
}
