// -	Text aus typeInputField in/zu js laden 
let typeInField = document.getElementById('typeInField');       //Eingabefeld mit id="typeInField" in variable namens dataTypeInField einlesen


// wenn onclick auf submitComment wird Funktion mit  name submitCommentOnclick gestartet:
function submitCommentOnclick(){




// -	der text von typeInputField wird in eine variable/Behälter namens dataTypeInputField gespeichert
let dataTypeInField = document.getElementById('typeInField').innerHTML; 


// -	der gespeicherte text in variable/Behälter namens dataTypeInputField wird in eine variable/Behälter namens showLastCommentReader gespeichert
let showLastCommentReader = document.getElementById('dataTypeInField').innerHTML; 


// -	die variable/Behälter namens showLastCommentReaderden wird in die div mit  der id=lastCommentReader eingegeben
// 	(gibt  es eine Möglichkeit, den Eintrag immer über dem letzten einsetzen zu lassen)
showLastCommentReader = document.getElementById('lastCommentReader').innerHTML
console.log('showLastCommentReader');
// -	zu der variable/Behälter namens showLastCommentReaderden wird nun etwas hinzugefügt:
// 	zwei Textumbruch bzw. zwei Leerzeilen 
// 	(oder  man könnte beim Einsetzen in den div lastCommentReader automatisch  im div einen neuen div kreieren?) 
	


//function abschließen
}

// wenn ein weiteres mal mit onclick submitComment die Funktion submitCommentOnclick aufgerufen wird soll dazu noch die Funktion commentIntoOtherDiv() ausgeführt werden?
// oder reicht das  oben????

