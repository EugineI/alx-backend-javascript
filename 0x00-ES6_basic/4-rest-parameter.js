export default function returnHowManyArguments(...count) {
	let total = 0;
	for (const c of count){
		total += 1;
	}
	return total
}
