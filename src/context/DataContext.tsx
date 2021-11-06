import React, {
	createContext,
	useContext,
	ReactNode,
	useEffect,
	useState
} from "react"
import data from "../database/dados.json"
import { ConvertDecimalToHour } from "../utils/ConvertDecimalToHour"

export interface DataInterface {
	[x: string]: any
	tempo_h: string | number
	tensao_V: number
	corrente_A: number
	potencia_kW: number
	temperatura_C: number
}

interface DataContextProps {
	arrayTempo: string[]
	Data: DataInterface[]
}

interface DataContextProviderProps {
	children: ReactNode
}

const DataContext = createContext({} as DataContextProps)
const Data: DataInterface[] = data

export function DataContextProvider({ children }: DataContextProviderProps) {
	const [arrayTempo, setArrayTempo] = useState([""])

	useEffect(() => {
		Data.forEach(
			element =>
				(element.tempo_h = ConvertDecimalToHour(element.tempo_h.toString()))
		)
		setArrayTempo(Data.map(element => element.tempo_h as string))
	}, [])

	return (
		<DataContext.Provider value={{ arrayTempo, Data }}>
			{" "}
			{children}{" "}
		</DataContext.Provider>
	)
}

export function useDataContext() {
	return useContext(DataContext)
}
