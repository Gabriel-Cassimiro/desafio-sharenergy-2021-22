import React from "react"

import clients from "../../../database/dadosClientes.json"

import { Table } from "../../Table"
import { useDarkModeContext } from "../../../context/DarkModeContext"
import { Profit } from "../../../utils/Profit"

interface Rows {
	id: number
	name: string
	usinaId: number[]
	percentualDeParticipacao: number[]
	profit: number[]
}

export function Clients() {
	const { nameTitle } = useDarkModeContext()
	nameTitle("Clientes")

	const percentual = clients.map(cliente =>
		cliente.usinas.map(i => i.percentualDeParticipacao)
	)
	const rows: Rows[] = clients.map(cliente => ({
		id: cliente.numeroCliente,
		name: cliente.nomeCliente,
		usinaId: cliente.usinas.map(usina => usina.usinaId),
		percentualDeParticipacao: cliente.usinas.map(
			usina => usina.percentualDeParticipacao
		),
		profit: Profit(Array.prototype.concat.apply([], percentual))
	}))

	return (
		<React.Fragment>
			<Table rows={rows} />
		</React.Fragment>
	)
}
