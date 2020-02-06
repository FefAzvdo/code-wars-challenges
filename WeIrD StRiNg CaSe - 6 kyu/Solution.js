function zero(n) {
	let totalFatorial = 0;

	for (let i = 0; i < n; i++) {
		totalFatorial = n * i + totalFatorial;
	}
	console.log(totalFatorial);
}
