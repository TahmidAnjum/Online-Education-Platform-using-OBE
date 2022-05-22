import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './Login.css'


import img from '../../assets/images/happy-women-student-gratuated-from-education-background-concept-free-vector.jpg';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', backgroundImage: `url(${img})` }}>
        <CssBaseline />
        <Grid 
          item
          xs={false}
          sm={0}
          md={8}
          // sx={{
          //   backgroundImage: `url(${img})`,//'url(https://source.unsplash.com/random)',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundColor: (t) =>
          //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
        />
        <Grid  item xs={12} sm={12} md={3} component={Paper} sx={{backgroundColor : 'transparent'}} elevation={0} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography align='center' sx={{width:'100%'}} component="h1" variant="h3">
              Welcome to our Platform for Outcome Based Learning
            </Typography>
            <Avatar sx={{ mt: 5, mb: 5, bgcolor: 'secondary.main', width:'70px', height:'70px' }}>
              <LockOutlinedIcon sx={{ fontSize: '40px'}}/>
            </Avatar>
            <Typography component="h2" variant="h4">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                className="username"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField 
                margin="normal"
                className="password"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={0}
          md={1}
          // sx={{
          //   backgroundImage: `url(${img})`,//'url(https://source.unsplash.com/random)',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundColor: (t) =>
          //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
        />
      </Grid>
    </ThemeProvider>
  );
}






// import React, { Component } from 'react'
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';//import { Link} from 'react-router-dom'
// import axios from 'axios';
// import { Grid } from '@mui/material';
// //import dumms from './dummies'
// //import '../css files/login.css';
// //import { Button } from 'bootstrap';

// const sign = require('jwt-encode');
// const secret = 'secret';


// //import * as React from 'react';


// function InputWithIcon() {
//   return (
//     <Box sx={{ '& > :not(style)': { m:1 } }}>
//       <FormControl variant="standard">
//         <InputLabel htmlFor="input-with-icon-adornment">
//           With a start adornment
//         </InputLabel>
//         <Input 
//           id="input-with-icon-adornment"
//           startAdornment={
//             <InputAdornment position="start">
//               <AccountCircleSharpIcon />
//             </InputAdornment>
//           }
//         />
//       </FormControl>
//       <TextField
//         id="input-with-icon-textfield"
//         label="TextField"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <AccountCircleSharpIcon />
//             </InputAdornment>
//           ),
//         }}
//         variant="outlined"
//       />
//       {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}> */}
        
//         <TextField 
//         // id="input-with-sx" 
//         label="With sx"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <AccountCircleSharpIcon />
//             </InputAdornment>
//           ),
//         }} variant="outlined"/>
//         {/* <AccountCircleSharpIcon sx={{ color: 'action.active' }} /></TextField> */}
//       {/* </Box> */}
//     </Box>
//   );
// }

// const Login =() =>
// {
//   return 
//       {/* <InputWithIcon/> */}
//       <TextField
//       id="input-with-icon-textfield"
//       label="TextField"
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <AccountCircleSharpIcon />
//           </InputAdornment>
//         ),
//       }}
//       variant="outlined"/>
    
//   ;
// }
    
// const handleChange = e =>
// {
//     const account = {...this.state.account};
    
//     account[e.currentTarget.name] = e.currentTarget.value;
//     this.setState({account});
// }

//     const handleSubmit = e =>
//     {
//         e.preventDefault();
//         //console.log(this.state.account);
//         (async()=>{
            
//             //const st = ['anjum' ,'14'];
//             const {status,data} = await axios.post("http://localhost:5000/login", this.state.account);
//             //var path = {...this.state.path};
//             if(status===201) 
//             {   console.log("login",data);
//                 const jwt = sign(data,secret);
//                 localStorage.setItem("anjum",jwt);
//                 let role;
//                 const name = data.name;
//                 const mArr = this.state.account.email.split('@');
//                 if(mArr.length>1)
//                 {
//                     this.props.history.push('/teacher/'+name);
//                     role = {as :"teacher"};
//                 }
//                 else
//                 {
//                     this.props.history.push('/student/'+name+'/'+data.student_id);
//                     role = {as :"student"};
//                 }
//                 const enRole = sign(role,secret);
//                 localStorage.setItem("role",enRole);
//             }
//             else{
//                 //this.props.history.push('/');
//                 //console.log("Meh")
//                 window.alert(data.msg);
//             }
//             //this.setState({path});
//         })().catch((e)=>{console.log(e)});;
//     }

//     // render() { 
//     //     //const {account} = this.state;
//     //     console.log(localStorage);
//     //     return (
//     //         // <div className="login">
//     //         //     <h2 className="active"> sign in </h2>
//     //         //     <form action="" onSubmit={this.handleSubmit}>
//     //         //         <div>
//     //         //             <p> Student ID(student)/E-mail(teacher)</p>
//     //         //             <input className="text" value={account.email} onChange={this.handleChange} type="text" name="email" />
//     //         //         </div>
//     //         //         <br />
//     //         //         <div>
//     //         //             <p> Password</p>
//     //         //             <input className="text" value={account.password} onChange={this.handleChange} type="password" name="password"  />
//     //         //         </div>
//     //         //         <div>
//     //         //             <button className="signin" onClick={this.handleSubmit}>
//     //         //                 Submit
//     //         //             </button>
//     //         //         </div>
//     //         //     </form>
                
//     //         // </div>
//     //         <InputWithIcon/>
//     //       );
//     // }

 
// export default Login;