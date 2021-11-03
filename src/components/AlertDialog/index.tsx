import React, { useState } from "react"
import IconButton from "@mui/material/IconButton"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import DeleteOutline from "@mui/icons-material/DeleteOutline"
import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from "@mui/material/Alert"

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

interface AlertDialogProps {
	id: number
	handleDelete: (id: number) => void
}

export function AlertDialog({ id, handleDelete }: AlertDialogProps) {
	const [open, setOpen] = useState(false)
	const [openSnack, setOpenSnack] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
		if (openSnack) {
			setOpenSnack(true)
		}
	}

	const handleCloseSnack = () => {
		setOpenSnack(false)
	}

	return (
		<div>
			<IconButton
				aria-label="delete"
				color="error"
				onClick={handleClickOpen}
				sx={{
					borderRadius: "10px",
					p: "5px 10px",
					marginRight: "1rem"
				}}
			>
				<DeleteOutline />
			</IconButton>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={openSnack}
				autoHideDuration={2500}
				onClose={handleCloseSnack}
			>
				<Alert
					onClose={handleCloseSnack}
					severity="success"
					sx={{ width: "100%" }}
				>
					User deleted!
				</Alert>
			</Snackbar>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="xl"
			>
				<DialogTitle id="alert-dialog-title">
					{"Tem certeza de que deseja excluir o registro definitivamente?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Você não pode desfazer essa operação
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Não</Button>
					<Button
						onClick={() => {
							handleDelete(id)
							handleClose()
						}}
						autoFocus
					>
						Sim
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
