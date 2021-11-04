import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

interface WidgetsProps {
	min: number
	max: number
	average: string
	deviation: string
}

const WidgetComponent = {
	display: "flex",
	width: "12rem",
	height: "5rem",
	padding: "1rem",
	flexDirection: "column",
	backgroundColor: "inherit",
	borderRadius: "inherit"
} as const

const TitleStyle = {
	fontWeight: "bold",
	color: "#e0e0e0"
}

export function Widgets({ min, max, average, deviation }: WidgetsProps) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
				marginTop: "1.5rem"
			}}
		>
			<Box sx={{ backgroundColor: "warning.dark", borderRadius: "1.25rem" }}>
				<Paper elevation={10} sx={WidgetComponent}>
					<Typography variant="h6" align="center" sx={TitleStyle}>
						Valor Mínimo
					</Typography>
					<Typography variant="h6" color="#fff" align="center">
						{min}
					</Typography>
				</Paper>
			</Box>

			<Box sx={{ backgroundColor: "secondary.dark", borderRadius: "1.25rem" }}>
				<Paper elevation={10} sx={WidgetComponent}>
					<Typography variant="h6" align="center" sx={TitleStyle}>
						Valor Máximo
					</Typography>
					<Typography variant="h6" color="#fff" align="center">
						{max}
					</Typography>
				</Paper>
			</Box>

			<Box sx={{ backgroundColor: "success.dark", borderRadius: "1.25rem" }}>
				<Paper elevation={10} sx={WidgetComponent}>
					<Typography variant="h6" align="center" sx={TitleStyle}>
						Valor Médio
					</Typography>
					<Typography variant="h6" color="#fff" align="center">
						{average}
					</Typography>
				</Paper>
			</Box>

			<Box sx={{ backgroundColor: "primary.dark", borderRadius: "1.25rem" }}>
				<Paper elevation={10} sx={WidgetComponent}>
					<Typography variant="h6" align="center" sx={TitleStyle}>
						Desvio Padrão
					</Typography>
					<Typography variant="h6" color="#fff" align="center">
						{deviation}
					</Typography>
				</Paper>
			</Box>
		</Box>
	)
}
