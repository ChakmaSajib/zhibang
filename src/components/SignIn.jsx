import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import {Email} from "@material-ui/icons"
import LockIcon from '@material-ui/icons/Lock';
import { useForm } from "react-hook-form";
import { Button,InputAdornment } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: 10
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function SignIn() {
    const { register, handleSubmit, errors } = useForm();
    const [valid, setValid] = useState(false);

    const classes = useStyles();

    const onSubmit = (data) =>{
        alert("button is clicked")
        console.log(data)
    }
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <Grid container spacing={3}>
              
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  )}}
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
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    )}}
                inputRef = {
                  register({
                    required: true,
                   
                  })
                }
                />
                {errors.name && "Please enter a valid password"}
                </Grid>




                
                <Grid item xs={12} sm={12}>
                <Button type="submit" variant="contained" color="secondary" fullWidth>Sign In</Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                Already have an account?  <Button color="primary" variant="contained" href="register">Sign Up</Button> here.
                </Grid>

                </Grid>
        
            </form>
            
          </Paper>
        </Grid>
      </Grid>
        </div>
    )
}
