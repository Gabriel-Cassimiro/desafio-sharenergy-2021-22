import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import { Link as RouterLink } from "react-router-dom"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import Paper from "@mui/material/Paper"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { Copyright } from "../Footer/Copyright"

interface State {
	amount: string
	password: string
	weight: string
	weightRange: string
	showPassword: boolean
}

type SignInFormData = {
	email: string
	password: string
}

const signInFormSchema = yup.object().shape({
	email: yup.string().required("Digite seu e-mail").email(),
	password: yup.string().required("Digite sua senha")
})

export function SignIn() {
	const [values, setValues] = React.useState<State>({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false
	})

	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value })
		}

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword
		})
	}

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
	}

	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema)
	})

	const { errors } = formState

	const hadleSignIn: SubmitHandler<SignInFormData> = async values => {
		await new Promise(resolve => setTimeout(resolve, 500)) //2000 = 2segundos
	}

	const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" }

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<Paper
				elevation={10}
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					p: "2rem"
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Entrar
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit(hadleSignIn)}
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="E-mail"
						autoComplete="email"
						autoFocus
						inputProps={{ style: inputStyle }}
						error={errors.email}
						helperText={errors?.email?.message}
						{...register("email")}
					/>
					<TextField
						fullWidth
						sx={{ mt: 2 }}
						label="Senha"
						id="password"
						autoComplete="password"
						error={errors.password}
						helperText={errors?.password?.message}
						{...register("password")}
						required
						type={values.showPassword ? "text" : "password"}
						value={values.password}
						onChange={handleChange("password")}
						inputProps={{ style: inputStyle }}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{values.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Lembre-se de mim"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Entrar
					</Button>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Link component={RouterLink} to="#" variant="body2">
								Esqueceu a senha?
							</Link>
						</Grid>
						<Grid item xs={12}>
							<Link component={RouterLink} to="/register" variant="body2">
								{"Criar uma conta"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Paper>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	)
}
