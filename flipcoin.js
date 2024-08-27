
            const randomnumber = Math.random();
            let result ='';
            if(randomnumber <0.5){
               result = 'head'
            }else if (randomnumber >=0.5 && randomnumber <=1 ){
                result ='tail'
            }
let guss = 'tail'

     if( result === guss){
        console.log(`coin ${result}.you win`)
     }  else  if( result !== guss){
        console.log(`coin ${result}.you lose`)
     }   
     
      
