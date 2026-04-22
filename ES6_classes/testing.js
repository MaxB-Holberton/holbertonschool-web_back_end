function init() {
	const name = "Mozilla"; // name is a local variable created by init
	const obj = {value: 43,
		arrowFunc: () => {console.log(name)},
		regFunc: () => {console.log(name)}
	}
	obj.arrowFunc();
	obj.regFunc();
}
init();
