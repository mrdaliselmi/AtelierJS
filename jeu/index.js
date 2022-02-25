while(true){
    let x=Math.floor(Math.random()*10);
    let level=prompt("choose difficulty level 1/2/3");
    let maxTries=(level==1)?10:(level==2)?5:2
    let valid=0;
    for (let index = 0; index < maxTries; index++) {
        if(index!=0) alert("Wrong")
        let guess=prompt(`Guess the Magic NUMBER (0-10) you have ${maxTries-index} tries`)
        if (guess==x){ 
            alert("Winner, Winner Chicken Dinner !!!")
            valid=1
            break;
        }
    }
    if (valid!=1){
        alert("You stink!!! LOOSER")
    }
    let again=prompt(`The answer was ${x}\nwanna try again ? yes/no`)
    if (again=="no"){
        break;
    }
}