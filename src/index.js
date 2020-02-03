

import {discSampler} from './bridson'
import {AvlTree} from './tree/avl'




 const canvas = document.getElementById("sampleSpace"),
tree = new AvlTree,
sampler = discSampler(960, 500, 5),
ctx = canvas.getContext("2d");

let count = 0
// debugger
while(count < 960*100){
    // tree.add(s[sample]);
    let s = sampler()
  
    if(s){
        tree.add(s);
        count++
    }

}
const gen = tree.inOrderTraversal()

let s;
while(gen.next().value){
    
    if(s = gen.next().value.value){
        console.log(s)
        ctx.fillRect(s[0], s[1], 1, 1)
    }
}