import { BrowserRouter, Switch, Route } from "react-router-dom"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"

import { Dashboard } from "./components/Pages/Dashboard"
import { Clients } from "./components/Pages/Clients"
import { Sidebar } from "./components/Sidebar"
import { NewUser } from "./components/Pages/NewUser"

function App() {
	return (
		<BrowserRouter>
			<Sidebar />
			<Box
				component="main"
				sx={{
					backgroundColor: theme =>
						theme.palette.mode === "light"
							? theme.palette.grey[100]
							: theme.palette.grey[900],
					flexGrow: 1,
					height: "100vh",
					overflow: "auto"
				}}
			>
				<Toolbar />
				<Switch>
					<Route exact path="/">
						<Dashboard />
					</Route>

					<Route path="/clients">
						<Clients />
					</Route>

					<Route path="/create">
						<NewUser />
					</Route>
				</Switch>
			</Box>
		</BrowserRouter>
	)
}

export default App
