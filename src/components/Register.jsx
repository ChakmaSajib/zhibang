import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import { useForm } from "react-hook-form";
import { Button,InputAdornment, Typography} from '@material-ui/core';
// import BannerImage from "../assets/images/jobBanner.png"



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: 10
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      
    },
  }));

export default function Register() {
    const { register, handleSubmit, errors } = useForm();
    const classes = useStyles();

    const onSubmit = (data) =>{
        alert("button is clicked")
        console.log(data)
    }
    return (
        <div className={classes.root}>
           
            <Grid container spacing={3}>
    
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src={BannerImage} style={{ width: 500, height: 400}}/>
          </Paper>
        </Grid> */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography variant="h2" component="h2">
            Registration
          </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} >
                <TextField 
                errors={errors.name}
                type="text"
                id="name"
                label="Full Name"
                variant="outlined"
                placeholder="Full Name"
                fullWidth
                className={classes.nameField}
                inputRef = {
                  register({
                    required: true,
                    maxLength: 13,
                    pattern: /^[0-9]*$/
                  })
                }
                />
                {errors.name && "Please enter a valid name"}
                </Grid>

                <Grid item xs={12} sm={12}>
                <TextField 
                errors={errors.email}
                type="email"
                id="email"
                label="Email Address"
                variant="outlined"
                placeholder="Email Address"
                fullWidth
                className={classes.nameField}
                inputRef = {
                  register({
                    required: true,
                    maxLength: 13,
                    pattern: /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g,
                  })
                }
                />
                {errors.email && "Please enter a valid email address"}
                </Grid>


                <Grid item xs={12} sm={12} >
                <TextField 
                errors={errors.password}
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                placeholder="Password"
                fullWidth
                className={classes.nameField}
                inputRef = {
                  register({
                    required: true,
                   
                  })
                }
                />
                {errors.name && "Please enter a valid password"}
                </Grid>




                <Grid item xs={12} sm={12} >
                <TextField 
                errors={errors.passwordAgain}
                type="text"
                id="password-again"
                label="Password Again"
                variant="outlined"
                placeholder="Re-type Password"
                fullWidth
                className={classes.nameField}
                inputRef = {
                  register({
                    required: true,
                    maxLength: 13,
                    pattern: /^[0-9]*$/
                  })
                }
                />
                {errors.passwordAgain && "Please enter a valid password"}
                </Grid>


                <Grid item xs={12} sm={12}>
                <Button type="submit" variant="contained" color="secondary"  fullWidth>Sign Up</Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                Already have an account?  <Button color="primary" variant="contained" href="signin" >Login</Button> here.
                </Grid>

                </Grid>
        
            </form>
            
          </Paper>
        </Grid>
      </Grid>
        </div>
    )
}
