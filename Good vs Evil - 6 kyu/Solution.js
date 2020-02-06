function goodVsEvil(good, evil) {
	const goodArr = good.split(" ");
	const evilArr = evil.split(" ");

	const numberGood = goodArr.map((num) => parseInt(num));
	const numberEvil = evilArr.map((num) => parseInt(num));

	const goodRaceWorth = numberGood.map((num, index) => {
		let worth = 0;
		switch (index) {
			case 0:
				worth = 1;
				break;
			case 1:
				worth = 2;
				break;
			case 2:
				worth = 3;
				break;
			case 3:
				worth = 3;
				break;
			case 4:
				worth = 4;
				break;
			case 5:
				worth = 10;
				break;
		}
		return num * worth;
	});

	const evilRaceWorth = numberEvil.map((num, index) => {
		let worth = 0;
		switch (index) {
			case 0:
				worth = 1;
				break;
			case 1:
				worth = 2;
				break;
			case 2:
				worth = 2;
				break;
			case 3:
				worth = 2;
				break;
			case 4:
				worth = 3;
				break;
			case 5:
				worth = 5;
				break;
			case 6:
				worth = 10;
		}
		return num * worth;
	});

	const goodFullForce = goodRaceWorth.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
	const evilFullForce = evilRaceWorth.reduce((acc, curr) => {
		return acc + curr;
	}, 0);

	console.log("goodFullForce", goodFullForce);
	console.log("evilFullForce", evilFullForce);

	if (goodFullForce > evilFullForce) {
		return "Battle Result: Good triumphs over Evil";
	} else if (evilFullForce > goodFullForce) {
		return "Battle Result: Evil eradicates all trace of Good";
	} else {
		return "Battle Result: No victor on this battle field";
	}
}
