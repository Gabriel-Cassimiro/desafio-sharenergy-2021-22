import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import { Copyright } from "./Copyright"

export function Footer() {
	return (
		<footer>
			<Box>
				<Container maxWidth="lg">
					<Copyright />
				</Container>
			</Box>
		</footer>
	)
}
