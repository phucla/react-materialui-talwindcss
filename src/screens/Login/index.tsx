import React, { useEffect, useRef, useState } from 'react';
import { 
  Box,
  TextField,
  Typography,
  Button,
  Input,
  InputAdornment,
  makeStyles,
  Theme
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import PasswordIcon from '@material-ui/icons/Lock';

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../stores/actions'
import { Auth, LoginData } from '../../types'
import ROUTES from '../../constants/routes'


const  Login = ()  => {
  const classes = useStyles()
	const navigate = useNavigate()
	const dispatch = useDispatch();
	const authStore = useSelector((state: Auth) => state.auth)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		if (authStore.type === Actions.LOGIN_SUCCESS) {
		  navigate(ROUTES.HOME)
		}
	
		// eslint-disable-next-line
	  }, [authStore.type])

	useEffect(() => {
		if (authStore.error && (authStore.error.email || authStore.error.password)) {
			disableButton();
		}
	}, [authStore.error]);

	function disableButton() {
		setIsFormValid(false);
	}

	const handleOnblurEmail = (e: any) => {
		setEmail(e.target.value)
	}
  const handleOnblurPassword = (e: any) => {
		setPassword(e.target.value)
	}
	function handleSubmit() {
		dispatch(Actions.loginRequest({
      email,
      password
    }));
	}

	return (
		<div className="w-full">
			<Box className={classes.root}>
        <Typography className={classes.title}>Login</Typography>
        <Typography className={classes.text}>Sign in to your account</Typography>
        <div className="pb-24">
          <Input
            id="email"
            onBlur={handleOnblurEmail}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </div>
        <div className="pb-24">
          <Input
            id="password"
            type="password"
            onBlur={handleOnblurPassword}
            startAdornment={
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            }
          />
        </div>
        <div>
          <Button disabled={isFormValid} onClick={handleSubmit} variant="contained" color="primary">
            Login
          </Button>
        </div>
      </Box>
		</div>
	);
}
const useStyles = makeStyles((theme: Theme) => ({
	text: {
		fontSize: "14px",
    padding: "15px 0 10px",
	},
  title: {
		fontSize: "25px",
    paddingTop: "5px",
	},
  chip: {
    height: "20px",
    color: "rgba(0, 0, 0, 0.87)"
  },
  root: {
    padding: "20px",
    border: "1px rgba(113, 104, 104, 0.1) solid",
    "& .MuiInputBase-input": {
      fontSize: "14px",
    },
    "& .MuiInputBase-root": {
      width: "200px"
    }
  }
}));

export default Login;
