const getColour= ()=>{

    // Hexadecimal code for colour

    const rendomNumber=Math.floor(Math.random() *16777215); // 
    
    const rendomCode="#"+rendomNumber.toString(16);
    //console.log(rendomNumber,rendomCode);
    document.body.style.backgroundColor=rendomCode;// pint the coloyr
    document.getElementById("color-code").innerText=rendomCode; // print hexacode
    navigator.clipboard.writeText(rendomCode); // This is  automaticaly copy randomcode=hexacode;
}
document.getElementById("btn").addEventListener(

    "click",
    getColour

)
getColour();
