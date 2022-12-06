const section = document.querySelector("section")

function StartGame(){
    console.log("show-none")

    var radioButton = document.getElementsByName("difficulty")
    console.log(radioButton)

    var ChoiceSelected = ""
    for (let i = 0; i < radioButton.length; i = i + 1){ 
        console.log(radioButton[i])
        if (radioButton[i].checked){
            ChoiceSelected = radioButton[i].value
        }
    }
    var EasyLvl = document.getElementById("easy-seen")
    var MedLvl = document.getElementById("med-seen")
    var HardLvl = document.getElementById("hard-seen")

    if (ChoiceSelected === "easy"){
    console.log("3x3 Match")
        EasyLvl.style.display = "grid"
        MedLvl.style.display = "none" 
        HardLvl.style.display = "none" 
    }else if (ChoiceSelected === "medium"){
    console.log("4x4 Match")
        MedLvl.style.display = "grid"
        EasyLvl.style.display = "none"
        HardLvl.style.display  = "none" 
    }else if (ChoiceSelected === "hard"){
        console.log("5x5 Match")
        HardLvl.style.display = "grid"
        MedLvl.style.display = "none"
        EasyLvl.style.display = "none" 
    }

    console.log("Aqua Background")
    var CheckBox = document.getElementById("BoardColor").checked
    var collection = document.getElementsByClassName("Color")
    if (CheckBox) {
        for (let i = 0; i < collection.length; i = i +1){ 
            collection[i].style.backgroundColor = "aqua"
        }
    } else {
        for (let i = 0; i < collection.length; i = i +1){ 
            collection[i].style.backgroundColor = "white"
        }
    }
    const GetImages = () => [
        {name: "Avo",img: "Images/Avo.jpeg"},
        {name: "Avo",img: "Images/Avo.jpeg"}, 
        {name: "BlueTooth", img: "Images/BlueTooth.JPG"},
        {name: "BlueTooth", img: "Images/BlueTooth.JPG"},
        {name: "Cheesy", img: "Images/Cheesy.JPG"},
        {name: "Cheesy", img: "Images/Cheesy.JPG"},
        {name: "ChocMilk", img: "Images/ChocMilk.JPG"},
        {name: "ChocMilk", img: "Images/ChocMilk.JPG"},
        {name: "Pandastic", img: "Images/Pandastic.JPG"},
        {name: "Pandastic", img: "Images/Pandastic.JPG"},
        {name: "PeasOut", img: "Images/PeasOut.JPG"},
        {name: "PeasOut", img: "Images/PeasOut.JPG"},
        {name: "SmartCookie", img: "Images/SmartCookie.jpeg"},
        {name: "SmartCookie", img: "Images/SmartCookie.jpeg"},
        {name: "Taco", img: "Images/Taco.jpeg"},
        {name: "Taco", img: "Images/Taco.jpeg"}
 ]
    const randomize = () => {
        const GetImages = GetImages();
        GetImages.sort(() => Math.random() - 0.5);
        console.log(GetImages);
    }
    randomize ();
 
}

