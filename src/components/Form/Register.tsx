import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import { Link as RouterLink } from "react-router-dom"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import FormControl from "@mui/material/FormControl"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

import { Copyright } from "../Footer/Copyright"

interface Password {
	amount: string
	password: string
	weight: string
	weightRange: string
	showPassword: boolean
}

interface ConfirmPassword {
	confirmPassword: string
	amount: string
	weight: string
	weightRange: string
	showPassword: boolean
}

export function Register() {
	const [values, setValues] = React.useState<Password>({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false
	})
	const [confirmValues, setConfirmValues] = React.useState<ConfirmPassword>({
		amount: "",
		confirmPassword: "",
		weight: "",
		weightRange: "",
		showPassword: false
	})

	const handleChangePassword =
		(prop: keyof Password) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value })
		}

	const handleChangeConfirm =
		(prop: keyof ConfirmPassword) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setConfirmValues({ ...confirmValues, [prop]: event.target.value })
		}

	function handleClickShowPassword() {
		setValues({
			...values,
			showPassword: !values.showPassword
		})
	}

	function handleClickShowConfirmPassword() {
		setConfirmValues({
			...confirmValues,
			showPassword: !confirmValues.showPassword
		})
	}

	function handleMouseDownPassword(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault()
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		// eslint-disable-next-line no-console
		console.log({
			name: data.get("name"),
			email: data.get("email"),
			password: data.get("password"),
			confirmPassword: data.get("confirmPassword")
		})
	}

	const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" }

	return (
		<Box>
			<Container component="main" maxWidth="sm">
				<CssBaseline />
				<Paper
					elevation={10}
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						padding: "2rem"
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Criar conta
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoComplete="given-name"
									name="name"
									required
									fullWidth
									id="name"
									label="Nome"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="E-mail"
									name="email"
									autoComplete="email"
									inputProps={{ style: inputStyle }}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
									<InputLabel htmlFor="password">Senha</InputLabel>
									<OutlinedInput
										name="password"
										label="Senha"
										id="password"
										required
										inputProps={{ style: inputStyle }}
										type={values.showPassword ? "text" : "password"}
										value={values.password}
										onChange={handleChangePassword("password")}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
												>
													{values.showPassword ? (
														<VisibilityOff />
													) : (
														<Visibility />
													)}
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
									<InputLabel htmlFor="confirmPassword">
										Confirme sua senha
									</InputLabel>
									<OutlinedInput
										name="confirmPassword"
										label="Confirme a senha"
										id="confirmPassword"
										inputProps={{ style: inputStyle }}
										required
										type={confirmValues.showPassword ? "text" : "password"}
										value={confirmValues.confirmPassword}
										onChange={handleChangeConfirm("confirmPassword")}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowConfirmPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
												>
													{confirmValues.showPassword ? (
														<VisibilityOff />
													) : (
														<Visibility />
													)}
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Registrar
						</Button>
						<Grid container justifyContent="center">
							<Grid item>
								<Link component={RouterLink} to="/login" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Paper>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</Box>
	)
}
