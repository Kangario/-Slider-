

let l = 100;
let position = 0;
let li = all.querySelector ('li');
but1.onclick = function (){  
    
    position += l;
     position = Math.min(position,[0])
     ul.style.marginLeft = position + '%';

}
but2.onclick = function(){  
    
    position -= l;
    position=Math.max(position, -l * 3)
     ul.style.marginLeft = position + '%';  
  
}




