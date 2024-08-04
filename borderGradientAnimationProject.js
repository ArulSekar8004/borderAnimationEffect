let btn1=document.getElementById("myButton")
let btn2=document.getElementById("myButton1")
let box=document.getElementsByClassName("box")[0]
let color1="pink"
let color2="#008000"
let copyCode=document.getElementsByClassName("copyCode")[0]
const hexValues=()=>{
    let hexaDecimal="0123456789abcdef"
    let colors="#"
    for(let i=0;i<6;i++){
        colors=colors+hexaDecimal[Math.floor(Math.random()*16)]    //with the help of floor give just decimal number
    }   
    return colors
}
const handleButton1=()=>{
    color1=hexValues()
    box.style.background=`repeating-conic-gradient(from var(--a),${color1} 0%,${color1} 5%,transparent 5%,transparent 40% ,${color1} 50%)`
    console.log(color1)
    btn1.innerText=color1
    btn1.style.backgroundColor=color1
    copyCode.innerText=`Color 1 : ${color1} \n Color 2 : ${color2}`
   
    console.log(copyCode.innerHTML)
}
const handleButton2 = () => {
    color2 = hexValues();
    let bg = `repeating-conic-gradient(from var(--a),${color2} 0%,${color2} 5%,transparent 5%,transparent 40%,${color2} 50%)`;
    let style = document.createElement('style');
    style.innerText = `.box::before { background: ${bg}; }`;
    document.head.append(style);
    btn2.textContent=color2
    btn2.style.backgroundColor=color2
    copyCode.innerText=`Color 1 : ${color1} \n Color 2 : ${color2}`
   
};
const copyHexaCodeOfColor=()=>{
    navigator.clipboard.writeText(copyCode.innerText)
    alert(`Successfully copied : \n ${copyCode.innerText}`)
}
 btn1.addEventListener("click",handleButton1)
 btn2.addEventListener("click",handleButton2)
 copyCode.addEventListener("click",copyHexaCodeOfColor)
