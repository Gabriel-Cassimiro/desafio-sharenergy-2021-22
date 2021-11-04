export function ArrayAverage(array: number[]): string {
	return (
		array.reduce((prev, current) => prev + current) / array.length
	).toFixed(2)
}
