//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
touristSpots.sort((a,b)=>{
	if(a>b) {return 1}
	if(a<b) {return -1}
	return 0;
})
function removeArticles(name) {
  return touristSpots.replace(/^(a |an |the )/i, '').trim();
}

