//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function getArticleLessString(input){
	let words = input.split(" ");
	let nonArticleWord = words.filter((word)=>{
		let smallCase = word.toLowerCase();
		if(smallCase === "the" || smallCase === "an" || smallCase === "a"){
			return false;
		}
		return true;
	})
	return nonArticleWord.join(" ");
}
let mp ={};
let arr1 = [];

for(let i=0;i<touristSpots.length;i++){
	let articleLessString = getArticleLessString(touristSpots[i]);
	mp[articleLessString]=touristSpots[i];
	arr1.push(articleLessString);
}

arr1.sort();
let outputList = [];
arr1.forEach((newString)=>{
	outputList.push(mp[newString]);
})
const ul = document.getElementById("band");
outputList.forEach((item)=>{
	const li = document.createElement("li");
	li.innerText = item;
	ul.append(li);
})
