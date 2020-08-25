chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	if(message){
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
	}
	else{
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
	}
}
