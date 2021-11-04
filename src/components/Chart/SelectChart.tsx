import React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

interface SelectChartInterface {
	dataKey: string
	setDataKey: React.Dispatch<React.SetStateAction<string>>
}

export function SelectChart({ dataKey, setDataKey }: SelectChartInterface) {
	const handleChange = (event: SelectChangeEvent) => {
		setDataKey(event.target.value as string)
	}

	return (
		<Box
			sx={{
				minWidth: 120,
				display: "flex",
				flexDirection: "row",
				justifyContent: "end"
			}}
		>
			<FormControl margin="normal">
				<InputLabel id="demo-simple-select-label">Valor</InputLabel>
				<Select
					defaultValue={dataKey}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={dataKey}
					onChange={handleChange}
				>
					<MenuItem value={"temperatura_C"}>Temperatura (°C)</MenuItem>
					<MenuItem value={"tensao_V"}>Tensão (∆V)</MenuItem>
					<MenuItem value={"corrente_A"}>Corrente (A)</MenuItem>
					<MenuItem value={"potencia_kW"}>Potência (kW)</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}
