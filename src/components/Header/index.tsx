import Toolbar from "@mui/material/Toolbar"
import { useTheme } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow"
import NotificationsIcon from "@mui/icons-material/Notifications"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Badge from "@mui/material/Badge"
import { useDarkModeContext } from "../../context/DarkModeContext"

interface TopBarProps {
	open: boolean
	toggleDrawer: () => void
}

export function Header({ open, toggleDrawer }: TopBarProps) {
	const theme = useTheme()
	const { colorMode, title } = useDarkModeContext()

	return (
		<Toolbar
			sx={{
				pr: "24px" // keep right padding when drawer closed
			}}
		>
			<IconButton
				edge="start"
				color="inherit"
				aria-label="open drawer"
				onClick={toggleDrawer}
				sx={{
					marginRight: "36px",
					...(open && { display: "none" })
				}}
			>
				<MenuIcon />
			</IconButton>
			<Typography
				component="h1"
				variant="h6"
				color="inherit"
				noWrap
				sx={{ flexGrow: 1 }}
			>
				{title}
			</Typography>
			<IconButton onClick={colorMode.toggleColorMode} color="inherit">
				{theme.palette.mode === "dark" ? (
					<BrightnessLowIcon />
				) : (
					<DarkModeIcon />
				)}
			</IconButton>
			<IconButton color="inherit">
				<Badge badgeContent={4} color="secondary">
					<NotificationsIcon />
				</Badge>
			</IconButton>
		</Toolbar>
	)
}
