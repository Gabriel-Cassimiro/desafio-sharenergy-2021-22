import React, { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import data from "../../../database/dados.json"

import { Chart } from "../../Chart"
import { SelectChart } from "../../Chart/SelectChart"
import { useDarkModeContext } from "../../../context/DarkModeContext"
import { ConvertDecimalToHour } from "../../../utils/ConvertDecimalToHour"
import { ArrayAverage } from "../../../utils/ArrayAverage"
import { getStandardDeviation } from "../../../utils/StandardDeviation"
import { Widgets } from "./Widgets"

export interface DataInterface {
	[x: string]: any
	tempo_h: string | number
	tensao_V: number
	corrente_A: number
	potencia_kW: number
	temperatura_C: number
}
const Data: DataInterface[] = data

export function Dashboard() {
	const [dataKey, setDataKey] = useState("temperatura_C")
	const { nameTitle } = useDarkModeContext()
	nameTitle("Dashboard")

	useEffect(() => {
		Data.forEach(
			element =>
				(element.tempo_h = ConvertDecimalToHour(element.tempo_h.toString()))
		)
	}, [])

	const min = Math.min(...Data.map(i => i[dataKey]))
	const max = Math.max(...Data.map(i => i[dataKey]))
	const average = ArrayAverage(Data.map(i => i[dataKey]))
	const deviation = getStandardDeviation(Data.map(i => i[dataKey]))

	console.log(Data.map(i => i.temperatura_C))

	return (
		<React.Fragment>
			<Box sx={{ width: "99%", height: "50%" }}>
				<Widgets min={min} max={max} average={average} deviation={deviation} />
				<SelectChart dataKey={dataKey} setDataKey={setDataKey} />
				<Chart Data={Data} dataKey={dataKey} />
			</Box>
		</React.Fragment>
	)
}
