function Cipher(message){
    const letterStr = "abcdefghijklmnopqrstuvwxyz";
    const cipherNum = Math.floor(Math.random() * Math.floor(10))
    console.log("Ciphering ", message, " Key ", cipherNum);
    let returnMessage = "";
    for (let i = 0; i < message.length; i++) {
        const startLetter = message[i];
        const letterLoc = letterStr.search(startLetter);
        let endLetterNum = 0;

        if(letterLoc + cipherNum > 25){
            endLetterNum = (letterLoc + cipherNum - 26);
        }
        else{
            endLetterNum = (letterLoc + cipherNum);
        }
        
        if(startLetter === " "){
            returnMessage = returnMessage + " ";
        }
        else if (startLetter === startLetter.toUpperCase()){
            returnMessage = returnMessage + letterStr[endLetterNum].toUpperCase();
        }
        else{
            returnMessage = returnMessage + letterStr[endLetterNum];
        }
    }
    console.log("Returning", returnMessage);
    return returnMessage;
}

export default Cipher 
//We're using far more variables than strictly necessary here, just to help paint things out a bit.