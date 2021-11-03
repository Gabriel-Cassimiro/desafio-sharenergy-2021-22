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
import InputAdornment from "@mui/material/InputAdornment"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

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

type UserRegisterFormData = {
	name: string
	email: string
	password: string
	confirmPassword: string
}

const UserRegisterFormSchema = yup.object().shape({
	name: yup.string().required("Digite seu nome"),
	email: yup.string().email().required("Digite seu e-mail"),
	password: yup
		.string()
		.required("Digite sua senha")
		.min(6, "Senha deve conter no mínimo 6 caracteres"),
	confirmPassword: yup
		.string()
		.oneOf([null, yup.ref("password")], "Senhas devem ser iguas")
})

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

	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(UserRegisterFormSchema)
	})

	const { errors } = formState

	const handleCreateUser: SubmitHandler<UserRegisterFormData> =
		async values => {
			await new Promise(resolve => setTimeout(resolve, 500))
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
						onSubmit={handleSubmit(handleCreateUser)}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									error={errors.name}
									helperText={errors?.name?.message}
									{...register("name")}
									required
									autoComplete="given-name"
									fullWidth
									id="name"
									label="Nome"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									error={errors.email}
									helperText={errors?.email?.message}
									{...register("email")}
									required
									fullWidth
									id="email"
									label="E-mail"
									autoComplete="email"
									inputProps={{ style: inputStyle }}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label="Senha"
									id="password"
									error={errors.password}
									helperText={errors?.password?.message}
									{...register("password")}
									required
									inputProps={{ style: inputStyle }}
									type={values.showPassword ? "text" : "password"}
									value={values.password}
									onChange={handleChangePassword("password")}
									sx={{ mt: 2 }}
									InputProps={{
										endAdornment: (
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
										)
									}}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									label="Confirme sua senha"
									id="confirmPassword"
									inputProps={{ style: inputStyle }}
									error={errors.confirmPassword}
									helperText={errors?.confirmPassword?.message}
									{...register("confirmPassword")}
									required
									fullWidth
									type={confirmValues.showPassword ? "text" : "password"}
									value={confirmValues.confirmPassword}
									onChange={handleChangeConfirm("confirmPassword")}
									sx={{ mt: 2 }}
									InputProps={{
										endAdornment: (
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
										)
									}}
								/>
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
