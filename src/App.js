
import { Button , createTheme, Grid} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './App.css';
import { Container } from '@mui/system';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import { featuredPosts, sidebar } from './data/Data';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
//import { makeStyles } from '@mui/styles';
//import {useTheme} from '@mui/material/styles';
//import ReactMarkdown from 'react-markdown'

import { ThemeProvider, makeStyles } from '@mui/styles'

const useStyles=makeStyles((theme) => ({
  mainGrid:{
    //marginTop: useTheme.spacing(3),
  },
}));

function App() {

  
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
}); 


  const classes=useStyles();


  return (
    <ThemeProvider theme={darkTheme}>
         <Container >
           <Header/> 
           <FeaturedPost/>
           <br/>
           <Grid container >
            {featuredPosts.map((post)=>(
              <PostCard post={post} key ={post.title}/>
            )
            )}
           </Grid>
           <Grid container  className={classes.mainGrid}>
            <Main title="From the farms "/>
            <Sidebar 
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
            
            />

           </Grid>
         </Container>
    </ThemeProvider>
    
  );
}

export default App;

// import "./App.css";
// import {
//   Container,
//   createTheme,
//   Grid,
  
//   ThemeProvider,
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import FeaturedPost from "./components/FeaturedPost";
// import PostCard from "./components/PostCard";
// import Header from "./components/Header";
// //import { featuredPosts, sidebar } from "./Data/Data";
// import Main from "./components/Main";
// import Sidebar from "./components/Sidebar";
// //import Footer from "./components/Footer";

// const useStyles = makeStyles((theme) => ({
//   mainGrid: {
//     marginTop: theme.spacing(3),
//   },
// }));

// function App() {
//   const darkTheme = createTheme({
//     palette: {
//       type: "dark",
//     },
//   });

//   const classes = useStyles();

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Container>
//         <Header />
//         <FeaturedPost />
//         <br />
//         <Grid container spacing={4}>
//           {FeaturedPost.map((post) => (
//             <PostCard key={post.title} post={post} />
//           ))}
//         </Grid>
//         <Grid container spacing={5} className={classes.mainGrid}>
//           <Main title="From the firehose" />
//           {/* <Sidebar
//             title={sidebar.title}
//             description={sidebar.description}
//             archives={sidebar.archives}
//             social={sidebar.social}
//           /> */}
//         </Grid>
//       </Container>
//       {/* <Footer
//         title="Footer"
//         description="Something here to give the footer a purpose!"
//       /> */}
//     </ThemeProvider>
//   );
// }

// export default App;
