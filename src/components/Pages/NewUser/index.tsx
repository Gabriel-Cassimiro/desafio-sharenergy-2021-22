import * as React from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import { useDarkModeContext } from "../../../context/DarkModeContext"

type CreateUserCreateFormData = {
	firstName: string
	lastName: string
	usinaId: number
	percentage: string
}

const CreateUserCreateFormSchema = yup.object().shape({
	firstName: yup.string().required("Infome o nome do cliente"),
	lastName: yup.string().required("Infome o sobrenome do cliente"),
	usinaId: yup
		.number()
		.typeError("usina deve ser um número")
		.positive("Usina deve ser maior que zero")
		.required("Infome a usina do cliente"),
	percentage: yup
		.number()
		.typeError("Porcentagem deve ser um número")
		.positive("Porcentagem deve ser maior que zero")
		.required("Infome o percentual de participação")
		.max(100, "Percentual não deve ser acima de 100")
})

export function NewUser() {
	const { nameTitle } = useDarkModeContext()
	nameTitle("Novo Cliente")

	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(CreateUserCreateFormSchema)
	})

	const { errors } = formState

	const handleCreateUser: SubmitHandler<CreateUserCreateFormData> =
		async values => {
			await new Promise(resolve => setTimeout(resolve, 500))
		}

	return (
		<React.Fragment>
			<Container component="main" maxWidth="lg">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}
				>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit(handleCreateUser)}
						sx={{ mt: 1 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="firstName"
									label="Primeiro Nome"
									autoFocus
									error={errors.firstName}
									helperText={errors?.firstName?.message}
									{...register("firstName")}
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Sobrenome"
									error={errors.lastName}
									helperText={errors?.lastName?.message}
									{...register("lastName")}
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<TextField
									type="number"
									required
									fullWidth
									id="usinaId"
									label="Id da usina"
									error={!!errors.usinaId}
									helperText={errors?.usinaId?.message}
									{...register("usinaId")}
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<TextField
									type="number"
									required
									fullWidth
									id="percentage"
									label="Percentual de participação"
									error={errors.percentage}
									helperText={errors?.percentage?.message}
									{...register("percentage")}
								/>
							</Grid>

							<Grid item xs={12}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									Criar novo cliente
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</React.Fragment>
	)
}
