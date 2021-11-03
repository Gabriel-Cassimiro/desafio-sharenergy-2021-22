import React, { useState } from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import PersonAdd from "@mui/icons-material/PersonAdd"
import Box from "@mui/material/Box"
import { AlertDialog } from "../AlertDialog"

interface TableProps {
	rows: {
		id: number
		name: string
		usinaId: number[]
		percentualDeParticipacao: number[]
	}[]
}

export function Table({ rows }: TableProps) {
	const [data, setData] = useState(rows)

	function handleDelete(id: number) {
		setData(data.filter(item => item.id !== id))
	}

	const columns: GridColDef[] = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "name",
			headerName: "Client",
			width: 200,
			editable: true
		},
		{
			field: "usinaId",
			headerName: "Número da usina",
			type: "number",
			width: 200,
			editable: true
		},
		{
			field: "percentualDeParticipacao",
			headerName: "Percentual de Participação (%)",
			type: "number",
			width: 400,
			editable: true
		},
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: params => {
				return (
					<>
						<Button
							component={Link}
							to={"/clients/" + params.row.id}
							variant="contained"
							color="success"
							sx={{
								borderRadius: "10px",
								p: "5px 10px",
								marginRight: "1rem",
								color: "#fff"
							}}
						>
							Edit
						</Button>
						<AlertDialog handleDelete={handleDelete} id={params.row.id} />
					</>
				)
			}
		}
	]

	return (
		<Box>
			<Button
				component={Link}
				to={"/create"}
				variant="outlined"
				color="secondary"
				startIcon={<PersonAdd />}
				sx={{
					display: "flex",
					width: "50%",
					marginLeft: "auto",
					marginTop: "1rem",
					marginRight: "auto",
					marginBottom: "1rem"
				}}
			>
				Novo Cliente
			</Button>
			<DataGrid
				rows={data}
				columns={columns}
				autoHeight
				autoPageSize
				pageSize={20}
				rowsPerPageOptions={[20]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</Box>
	)
}
