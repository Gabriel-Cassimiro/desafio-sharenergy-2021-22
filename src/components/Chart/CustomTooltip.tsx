import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export function CustomTooltip({ active, payload, label }: any) {
	if (active) {
		return (
			<Box
				sx={{
					borderRadius: "0.25rem",
					padding: "0.5rem",
					textAlign: "center",
					boxShadow: 1,
					backgroundColor: theme =>
						theme.palette.mode === "light" ? theme.palette.grey[100] : "#26313c"
				}}
			>
				<Typography variant="h6" sx={{ color: "text.primary" }}>
					Valor: {payload?.[0].value}
				</Typography>
				<Typography paragraph={true} sx={{ color: "text.secundary" }}>
					Horário: {label}
				</Typography>
			</Box>
		)
	}

	return null
}
