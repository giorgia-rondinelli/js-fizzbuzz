const container= document.getElementById('container-sc')

for(let i=1; i<= 100; i++ ){

 

    if((i%3 ===0)&&(i%5==0)){
      
      console.log( 'FizzBuzz')
      
      container.innerHTML+=`<div class= both p-3 > Fizzbuzz</div>`
    }
    else if (i%5 ===0){
      console.log('Buzz')
      
      container.innerHTML+=`<div class= cinque p-3> Buzz</div>`
    }
    else if (i%3 ===0 ){
      console.log('Fizz')
      container.innerHTML+=`<div class= tre p-3  > Fizz</div>`
    }
    else{
      console.log(i)
      container.innerHTML+=`<div class= numeri p-3> ${i}</div>`
    }
   
  
 }

 
  


