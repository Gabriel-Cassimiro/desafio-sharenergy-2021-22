import React, { useState, useEffect } from "react"

import { Chart } from "../../Chart"
import { SelectChart } from "../../Chart/SelectChart"
import { useDarkModeContext } from "../../../context/DarkModeContext"
import data from "../../../database/dados.json"
import { ConvertDecimalToHour } from "../../../utils/ConvertDecimalToHour"
import Box from "@mui/material/Box"

export interface DataInterface {
	tempo_h: string | number
	tensao_V: number
	corrente_A: number
	potencia_kW: number
	temperatura_C: number
}

export function Dashboard() {
	const [dataKey, setDataKey] = useState("temperatura_C")
	const [Data, setData] = useState<DataInterface[]>([])

	const { nameTitle } = useDarkModeContext()
	nameTitle("Dashboard")

	useEffect(() => {
		setData(data)
		Data.forEach(
			element =>
				(element.tempo_h = ConvertDecimalToHour(element.tempo_h.toString()))
		)
	}, [Data])

	return (
		<React.Fragment>
			<Box sx={{ width: "99%" }}>
				<SelectChart dataKey={dataKey} setDataKey={setDataKey} />
				<Chart Data={Data} dataKey={dataKey} />
			</Box>
		</React.Fragment>
	)
}
