import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useMemo
} from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"

interface DarkModeContextProps {
	colorMode: {
		toggleColorMode: () => void
	}
	nameTitle: (titleName: string) => void
	title: string
}

interface DarkModeProviderProps {
	children: ReactNode
}

const DarkModeContext = createContext({} as DarkModeContextProps)

export function DarkModeProvider({ children }: DarkModeProviderProps) {
	const [mode, setMode] = useState<"light" | "dark">("dark")
	const [title, setTitle] = useState("Dashboard")

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === "light" ? "dark" : "light"))
			}
		}),
		[]
	)

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode
				}
			}),
		[mode]
	)

	function nameTitle(titleName: string) {
		setTitle(() => titleName)
	}

	return (
		<DarkModeContext.Provider value={{ colorMode, nameTitle, title }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</DarkModeContext.Provider>
	)
}

export function useDarkModeContext() {
	return useContext(DarkModeContext)
}
