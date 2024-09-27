import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let getal1  = parseFloat(await userInput.question('geeft een getal ?  '))
let getal2 = parseFloat(await userInput.question('geeft een getal ?  '))
let getal3  = parseFloat(await userInput.question('geeft een getal ?  '))
let getal4  = parseFloat(await userInput.question('geeft een getal ?  '))
let getal5  = parseFloat(await userInput.question('geeft een getal ?  '))

let gemidelde = (getal1 + getal2 + getal3 + getal4 + getal5) / 5

if(getal1 > getal2 && getal1 > getal3 && getal1 > getal4 && getal1 > getal5){
    console.log('de hoogste getal is '  + getal1)
} else if (getal2 > getal1 && getal2 > getal3 && getal2> getal4 && getal2 > getal5){
    console.log('de hoogste getal is  ' + getal2)
}else if(getal3 > getal1 && getal3> getal2 && getal3 > getal4 && getal3 > getal5){
    console.log('de hoogste getal is  '+ getal3)
}else if (getal4 > getal1 && getal4 > getal2 && getal1 > getal3 && getal1 > getal5){
    console.log('de hoogste getal is  ' + getal4)
}else{
    console.log('de hoogste getal is  ' + getal5);
  
}


if(getal1 < getal2 && getal1 < getal3 && getal1 < getal4 && getal1 < getal5){
    console.log('de laagste getal is '  + getal1)
} else if (getal2 < getal1 && getal2 < getal3 && getal2< getal4 && getal2 < getal5){
    console.log('de laagste getal is  ' + getal2)
}else if(getal3 < getal1 && getal3< getal2 && getal3 < getal4 && getal3 < getal5){
    console.log('de laagste getal is  '+ getal3)
}else if (getal4 < getal1 && getal4 < getal2 && getal1 < getal3 && getal1 < getal5){
    console.log('de laagste getal is  ' + getal4)
}else{
    console.log('de laagste getal is  ' + getal5);
  
}

console.log('het gemidelde is ' + gemidelde)