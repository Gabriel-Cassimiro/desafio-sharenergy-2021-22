export function ConvertDecimalToHour(decimalTimeString: string): string {
	var n = new Date(0, 0)
	n.setMinutes(+decimalTimeString * 60)
	return n.toTimeString().slice(0, 5)
}
