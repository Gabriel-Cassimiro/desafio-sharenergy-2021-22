import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { Link as RouterLink } from "react-router-dom"

export function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link
				component={RouterLink}
				color="inherit"
				to="https://sharenergy.com.br/"
			>
				Sharenergy
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	)
}
