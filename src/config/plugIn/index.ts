const randomNumber = function (min: number, max: number) {
	return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)
}

const markedLinkPrism = (markdown: string) => {
	console.log(markdown)
}

export {randomNumber, markedLinkPrism}
