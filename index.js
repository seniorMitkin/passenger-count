let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function incrementButton(){
	console.log(count)
	count +=1
	countEl.innerText = count
	
}

function save(){
	let countStr = count + " - "
	saveEl.textContent += countStr
	console.log(count)

	countEl.innerText = 0
	count = 0
}

