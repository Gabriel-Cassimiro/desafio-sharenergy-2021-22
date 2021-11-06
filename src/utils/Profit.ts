import { Data } from "../database/Dados"

export function Profit(participation: number[]): number[] {
	const potenciaTotal = Data.reduce(
		(previousValue, currentValue) => previousValue + currentValue.potencia_kW,
		0
	)

	const arr = []

	for (let j = 0; j < Data.length - 1; j++) {
		arr.push(Data[j + 1].tempo_h - Data[j].tempo_h)
	}

	const tempo = arr.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		0
	)

	const tempoTotal = tempo / (Data.length - 1)

	return participation.map(i => (i / 100) * (tempoTotal * potenciaTotal * 0.95))
}
