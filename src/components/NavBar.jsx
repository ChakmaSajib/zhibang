import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  signInbutton: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderRadius: 4,
    marginLeft: 10
  },

  signUpBotton: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'white',
    marginLeft: 10
  },
  companySignIn: {
    borderRightColor: 'lightGray',
    marginLeft: 10
  }
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <Container fluid>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>
          <Typography variant='h4'> Zhibang.</Typography>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>
              <Button color='primary'> Home </Button>
            </Nav.Link>

            <Nav.Link href='#'>
              <Button color='primary'>Upload CV </Button>
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href='/help'>
              <Tooltip title='Help Center' arrow>
                <Button>
                  <HelpIcon />
                </Button>
              </Tooltip>
            </Nav.Link>
            <Nav.Link href='/signin' className={classes.companySignIn}>
              <Button>Company Sign In</Button>
            </Nav.Link>
            <Nav.Link href='/signin' className={classes.signInbutton}>
              <Button>Login</Button>
            </Nav.Link>
            <Nav.Link href='/register'>
              <Button>Sign up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
