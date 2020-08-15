

let l = 100;
let position = 0;
let li = all.querySelector ('li');
but1.onclick = function (){  
    
    position += l;
     ul.style.marginLeft = position + '%';

}
but2.onclick = function(){  
    
    position -= l;
     ul.style.marginLeft = position + '%';  
  
}




