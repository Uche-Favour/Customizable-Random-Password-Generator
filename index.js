
function generate(){

    const numberChars = "0123456789"; //character pools
    const symbolChars = "~`!@#$%^&*()_-+={}[],|:;<>.?/";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const includeNumber = document.getElementById('includeNumber');
    const includeSymbol = document.getElementById('includeSymbol');
    const includeLowerCase = document.getElementById('includeLowerCase');
    const includeUpperCase = document.getElementById('includeUpperCase');
  
    const length = document.getElementById('passwordLength');

    let len = Number(length.value); //convert the value of the length input to a number

    const display1 = document.getElementById('display1');
    const display2 = document.getElementById('display2');

    let toast = document.getElementById("toast");

    

    let allowedChars = ""; //a container for the characters that are allowed to be used in the password by user

    //check which options are selected and add the corresponding characters to the allowedChars string
    includeNumber.checked === true ? allowedChars += numberChars : allowedChars += "";
    includeSymbol.checked === true ? allowedChars += symbolChars : allowedChars += "";
    includeLowerCase.checked === true ? allowedChars += lowercaseChars : allowedChars += "";
    includeUpperCase.checked === true ? allowedChars += uppercaseChars : allowedChars += "";
   

    //check if no options are selected, if so, display a message and return
    if (allowedChars === ""){
        display1.textContent = "select an option";
        display2.textContent = "select an option";
        return
    }
        
    //generate two passwords of the specified length using the allowed characters
    let password = "";
    let password2 = "";
    for (let i = 0; i < len; i++) {
            let randomIndex = Math.floor(Math.random() * allowedChars.length); //generate a random index to select a character from the allowedChars string
            password += allowedChars[randomIndex];

            let rIndex = Math.floor(Math.random() * allowedChars.length); //generate a random index to select a character from the allowedChars string
            password2 += allowedChars[rIndex];
        }

        display1.textContent = password;
        display2.textContent = password2;


        //copy to clipboard
        display1.addEventListener("click", ()=>{
            navigator.clipboard.writeText(display1.textContent);
            toast.style.display = 'block';
            toast.textContent = `COPIED: ${display1.textContent}`;
            setTimeout(() => toast.style.display = 'none', 1000);

        })

        
        display2.addEventListener("click", () =>{
        navigator.clipboard.writeText(display2.textContent);
        toast.style.display = 'block';
        toast.textContent = `COPIED: ${display2.textContent}`;
        setTimeout(() => toast.style.display = 'none', 1000);
        
        })

}


