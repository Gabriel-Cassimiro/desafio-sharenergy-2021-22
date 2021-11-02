import ReactDOM from "react-dom"
import CssBaseline from "@mui/material/CssBaseline"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { DarkModeProvider } from "../src/context/DarkModeContext"
import Box from "@mui/material/Box"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import { Register } from "./components/Form/Register"
import { SignIn } from "./components/Form/SignIn"
import App from "./App"

const theme = createTheme()

ReactDOM.render(
	<DarkModeProvider>
		<CssBaseline />
		<BrowserRouter>
			<Switch>
				<Route path={["/login", "/register"]}>
					<ThemeProvider theme={theme}>
						<Switch>
							<Route path="/login" component={SignIn} />
							<Route path="/register" component={Register} />
						</Switch>
					</ThemeProvider>
				</Route>
			</Switch>

			<Route exact path="/">
				<Box sx={{ display: "flex" }}>
					<App />
				</Box>
			</Route>
		</BrowserRouter>
	</DarkModeProvider>,
	document.querySelector("#root")
)
