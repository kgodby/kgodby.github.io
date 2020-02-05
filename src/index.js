

import {poissonDiscSampler} from './sampler'
import {AvlTree} from './tree/avl'




const canvas = document.getElementById("sampleSpace"),
tree = new AvlTree,
sampler = poissonDiscSampler(960, 500, 10),
ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 500;

// debugger
let p,s = sampler();


while(p = s.next().value){
    // tree.add(s[sample]);
   
  
    if(p.value){
        tree.add(p.value);
       
    }
 
}


const gen = tree.inOrderTraversal()


while(gen.next().value){
 
    if(s = gen.next().value.value){
  
        ctx.fillRect(s[0], s[1], 1, 1)
        
    }
}
