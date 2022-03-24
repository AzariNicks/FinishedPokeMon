/*  



let backpack = []
let belt = []

backpack.push('Pokeball')
backpack.push('Potion')
backpack.push('PokeDollars')
belt.push(backpack[0])
backpack.shift()

let stone = "waterstone"

backpack.push(stone)
//console.log(backpack)
backpack.pop()

backpack.push('Great ball', "Antidote", `Revive`)
let satchel = backpack.splice(3, 2)





for(let i = 0; i < backpack.length; i++){console.log(`This is the item at the index of ${i} ` + backpack[i])}

/*for(let i = 0; i < 2; i++){
    console.log(backpack[i])
}

if(backpack.length > 2){
    for(let i = 0; i < 2; i++){
    console.log(backpack[i])
}

    
}  else {
    for(let i = 0; i < backpack.length; i++){console.log(`This is the item at the index of ${i} ` + backpack[i])}

} */
//--------------------------------------------
// console.log(satchel)
//----------------------------------------------




let guessMe = 54

while (guessMe < 100) {console.log( `does a thing and gets this ` + guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {  console.log(`adds 25`)
        guessMe += 25
    } else if (guessMe % 3 === 0) { console.log(`subtracted 27`)
        guessMe -= 27
    } else {                        console.log(`added 3`)
        guessMe += 3
    }
    guessMe += 22  ,  console.log("added 22")
}
console.log(`final value  `+ guessMe)