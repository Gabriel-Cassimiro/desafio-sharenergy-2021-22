import React, { useState } from "react"
import Box from "@mui/material/Box"

import { Chart } from "../../Chart"
import { SelectChart } from "../../Chart/SelectChart"
import { useDarkModeContext } from "../../../context/DarkModeContext"
import { ArrayAverage } from "../../../utils/ArrayAverage"
import { getStandardDeviation } from "../../../utils/StandardDeviation"
import { Widgets } from "./Widgets"
import { useDataContext } from "../../../context/DataContext"

export function Dashboard() {
	const { Data } = useDataContext()
	const [dataKey, setDataKey] = useState("temperatura_C")
	const { nameTitle } = useDarkModeContext()
	nameTitle("Dashboard")

	const min = Math.min(...Data.map(i => i[dataKey]))
	const max = Math.max(...Data.map(i => i[dataKey]))
	const average = ArrayAverage(Data.map(i => i[dataKey]))
	const deviation = getStandardDeviation(Data.map(i => i[dataKey]))

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
