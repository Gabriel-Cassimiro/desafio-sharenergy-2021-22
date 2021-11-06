import ReactDOM from "react-dom"
import CssBaseline from "@mui/material/CssBaseline"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { DarkModeProvider } from "../src/context/DarkModeContext"
import { DataContextProvider } from "../src/context/DataContext"
import Box from "@mui/material/Box"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import { Register } from "./components/Form/Register"
import { SignIn } from "./components/Form/SignIn"
import App from "./App"

const theme = createTheme()

ReactDOM.render(
	<DarkModeProvider>
		<DataContextProvider>
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<ThemeProvider theme={theme}>
						<Route path="/login">
							<SignIn />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
					</ThemeProvider>
				</Switch>

				<Route exact path="/">
					<Box sx={{ display: "flex" }}>
						<App />
					</Box>
				</Route>
			</BrowserRouter>
		</DataContextProvider>
	</DarkModeProvider>,
	document.querySelector("#root")
)
