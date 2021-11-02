import useTheme from "@mui/material/styles/useTheme"
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Label,
	ResponsiveContainer,
	Tooltip,
	CartesianGrid
} from "recharts"

import { DataInterface } from "../Pages/Dashboard"
import { CustomTooltip } from "./CustomTooltip"

interface ChartProps {
	Data: DataInterface[]
	dataKey: string
}

export function Chart({ Data, dataKey }: ChartProps) {
	const theme = useTheme()

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
				<YAxis stroke={theme.palette.text.secondary}>
					<Label
						angle={270}
						position="left"
						style={{
							textAnchor: "middle",
							fill: theme.palette.text.primary,
							...theme.typography.body1
						}}
					>
						Valor
					</Label>
				</YAxis>
				<Tooltip content={<CustomTooltip />} />
				<CartesianGrid opacity={0.1} vertical={false} />
				<Line
					isAnimationActive={false}
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
