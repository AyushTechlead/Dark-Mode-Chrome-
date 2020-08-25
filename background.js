
let darkToggle = false
const setDarkToggle = () => darkToggle = !darkToggle;

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
	chrome.tabs.sendMessage(tab.id, darkToggle);
	setDarkToggle();
}
