module.exports = function toReadable(number) {
	return toTex(number);
}

function toTex(number) {
	let tillNineteen = new Map([
		[0, 'zero'],
		[1, 'one'],
		[2, 'two'],
		[3, 'three'],
		[4, 'four'],
		[5, 'five'],
		[6, 'six'],
		[7, 'seven'],
		[8, 'eight'],
		[9, 'nine'],
		[10, 'ten'],
		[11, 'eleven'],
		[12, 'twelve'],
		[13, 'thirteen'],
		[14, 'fourteen'],
		[15, 'fifteen'],
		[16, 'sixteen'],
		[17, 'seventeen'],
		[18, 'eighteen'],
		[19, 'nineteen'],
	]);

	let tens = new Map([
		[2, 'twenty'],
		[3, 'thirty'],
		[4, 'forty'],
		[5, 'fifty'],
		[6, 'sixty'],
		[7, 'seventy'],
		[8, 'eighty'],
		[9, 'ninety'],
	]);

	if (number < 20) {
		return tillNineteen.get(number);
	} else if(number > 19 && number < 100) {
		let tensPlaceValue = Math.floor( number / 10);
		let onesPlaceValue = number - (tensPlaceValue * 10);
		if (onesPlaceValue === 0) {
			return `${tens.get(tensPlaceValue)}`;
		} else { 
		return `${tens.get(tensPlaceValue)} ${tillNineteen.get(onesPlaceValue)}`;
		}
	} else if (number > 99 && number < 1000) {
		let hundredPlaceValue = Math.floor(number / 100);
		let tensPlaceValue = Math.floor( (number - (hundredPlaceValue * 100)) / 10 );
		let onesPlaceValue = number - (hundredPlaceValue * 100) - (tensPlaceValue * 10);

		if (tensPlaceValue === 0 && onesPlaceValue === 0) {
			return `${tillNineteen.get(hundredPlaceValue)} hundred`;
		} else if (tensPlaceValue === 0 && onesPlaceValue < 20) {
			return `${tillNineteen.get(hundredPlaceValue)} hundred ${tillNineteen.get(onesPlaceValue)}`
		} else if (tensPlaceValue === 1) {
			return `${tillNineteen.get(hundredPlaceValue)} hundred ${tillNineteen.get(number - (hundredPlaceValue * 100) )}`;
		} else if (tensPlaceValue > 1 && onesPlaceValue === 0) {
			return `${tillNineteen.get(hundredPlaceValue)} hundred ${tens.get(tensPlaceValue)}`;
		} else {
			return `${tillNineteen.get(hundredPlaceValue)} hundred ${tens.get(tensPlaceValue)} ${tillNineteen.get(onesPlaceValue)}`
		}
	}
}

