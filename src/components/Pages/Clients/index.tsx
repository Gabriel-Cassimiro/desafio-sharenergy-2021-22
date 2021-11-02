import React from "react"

import clients from "../../../database/dadosClientes.json"
import { Table } from "../../Table"
import { useDarkModeContext } from "../../../context/DarkModeContext"

export function Clients() {
	const { nameTitle } = useDarkModeContext()
	nameTitle("Clientes")

	const rows = clients.map(cliente => ({
		id: cliente.numeroCliente,
		name: cliente.nomeCliente,
		usinaId: cliente.usinas.map(usina => usina.usinaId),
		percentualDeParticipacao: cliente.usinas.map(
			usina => usina.percentualDeParticipacao
		)
	}))

	return (
		<React.Fragment>
			<Table rows={rows} />
		</React.Fragment>
	)
}
