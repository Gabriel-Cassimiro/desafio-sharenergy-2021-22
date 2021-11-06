import useTheme from "@mui/material/styles/useTheme"
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Label,
	ResponsiveContainer,
	Tooltip,
	CartesianGrid,
	Legend
} from "recharts"

import { DataInterface } from "../../context/DataContext"
import { CustomTooltip } from "./CustomTooltip"

interface ChartProps {
	Data: DataInterface[]
	dataKey: string
}

interface LegendName extends Record<string, any> {
	potencia_kW: string
	corrente_A: string
	tensao_V: string
	temperatura_C: string
}

export function Chart({ Data, dataKey }: ChartProps) {
	const theme = useTheme()

	const legendName: LegendName = {
		temperatura_C: "Temperatura (°C)",
		tensao_V: "Tensão (∆V)",
		corrente_A: "Corrente (A)",
		potencia_kW: "Potência (kW)"
	}

	return (
		<ResponsiveContainer width="100%" aspect={4 / 1}>
			<LineChart
				data={Data}
				margin={{
					top: 16,
					right: 16,
					bottom: 28,
					left: 24
				}}
			>
				<XAxis dataKey={"tempo_h"} stroke={theme.palette.text.secondary}>
					<Label
						position="bottom"
						style={{
							textAnchor: "middle",
							fill: theme.palette.text.primary,
							...theme.typography.body1
						}}
					>
						Horário
					</Label>
				</XAxis>
				<YAxis stroke={theme.palette.text.secondary}></YAxis>
				<Tooltip content={<CustomTooltip />} />
				<Legend verticalAlign="top" height={56} />

				<CartesianGrid opacity={0.8} vertical={false} />
				<Line
					isAnimationActive={false}
					name={legendName[dataKey]}
					type="monotone"
					dataKey={dataKey}
					stroke={theme.palette.primary.main}
					strokeWidth={3}
					dot={false}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}
