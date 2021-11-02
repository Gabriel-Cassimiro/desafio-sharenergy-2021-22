import List from "@mui/material/List"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListItemButton from "@mui/material/ListItemButton"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PeopleIcon from "@mui/icons-material/People"
import PersonAdd from "@mui/icons-material/PersonAdd"

import { NavLink } from "react-router-dom"

export function ListItems() {
	return (
		<List>
			<ListItemButton
				component={NavLink}
				exact
				to="/"
				activeStyle={{
					fontWeight: "bold",
					color: "#1976d2"
				}}
			>
				<ListItemIcon sx={{ color: "inherit" }}>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItemButton>

			<ListItemButton
				exact
				component={NavLink}
				to="/clients"
				activeStyle={{
					fontWeight: "bold",
					color: "#1976d2"
				}}
			>
				<ListItemIcon sx={{ color: "inherit" }}>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="Clientes" />
			</ListItemButton>

			<ListItemButton
				component={NavLink}
				to="/create"
				activeStyle={{
					fontWeight: "bold",
					color: "#1976d2"
				}}
			>
				<ListItemIcon sx={{ color: "inherit" }}>
					<PersonAdd />
				</ListItemIcon>
				<ListItemText primary="Relatórios" />
			</ListItemButton>
		</List>
	)
}
