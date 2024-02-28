let poeg =0;
let pelus=2;
let haruppragerat = false;

const addtwo = () => {
    if(haruppragerat===false) {
        poeg+=1
    } if(haruppragerat===true) {
        poeg+=2
    }
    
    räknare = document.getElementById("hej") 
    räknare.textContent = poeg;

}
const tvåpoäge = () => {
    //kolla i poeg kan dom uppragera till två poäge
    if(poeg >= 100 ){
haruppragerat=true
    }
}