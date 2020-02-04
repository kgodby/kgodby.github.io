

import {discSampler} from './bridson'
import {AvlTree} from './tree/avl'




const canvas = document.getElementById("sampleSpace"),
tree = new AvlTree,
sampler = discSampler(960, 500, 5),
ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 500;
let count = 0
// debugger
let s;
while(count < 20000){
    // tree.add(s[sample]);
   
    s = sampler();
    if(s){
        tree.add(s);
        count++
    }
   
}
const gen = tree.inOrderTraversal()


while(gen.next().value){
 
    if(s = gen.next().value.value){
    
        ctx.fillRect(s[0], s[1], 1, 1)
    }
}