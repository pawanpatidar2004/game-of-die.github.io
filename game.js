function ref() {

var pawarr = ['1.png.jpeg', '2.png.jpeg', '3.png.jpeg', '4.png.jpeg', '5.png.jpeg', '6.png.jpeg',]


    var first = Math.floor(Math.random(1) * 5) + 1;
    var second = Math.floor(Math.random(1) * 5) + 1;

    var rndomimg1 = pawarr[first];
    var rndomimg2 = pawarr[second];

 

    document.getElementById('img1').style.backgroundImage=`url(images/${rndomimg1})`;
    document.getElementById('img2').style.backgroundImage=`url(images/${rndomimg2})`;

    if(first < second){
       pp= document.getElementById('r1').innerText=("Player two win.👑");

    }else if (first>second){
        pp=document.getElementById('r1').innerText=("Player one win.👑");
        
        
    }else if(first==second){
      pp=  document.getElementById('r1').innerText=("Match tied👑");

     
    
    }
    
}


