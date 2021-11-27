



function calcularN(){
    
    let select1 = parseInt(document.getElementById('seleciona-temperatura1').value);
    let select2 = parseInt(document.getElementById('seleciona-temperatura2').value);
    let temperatura = parseInt(document.getElementById('temperatura').value);
    let formulaF = (parseInt(temperatura) * 1.8) + 32;
    let formulaK =parseInt(temperatura) + 273;
    let resultado = document.getElementById('resultado');
    // let selectA = parseInt(select);
    // if(select1===0 || select2===0){
    //     let nome ='kevlin';
    // }else if(select1===1 || select2===1){
    //     let nome = '°Fahrenheit';
    // } else if(select1===2||select2===2){
    //     let nome = '°Celsius' ;
    
    if(select1 === 0 && select2 ===0 ||select1 === 1 && select2 ===1 ||select1===2 && select2===2){ 
       switch(select1|| select2){
           case 0: 
               resultado.innerHTML= (`A temperatura  em kelvin é ${temperatura} `)
           break;
           case 1:
               resultado.innerHTML = (`A temperatura em °Fahrenheit è ${temperatura}`)
           break;
           case 2: 
               resultado.innerHTML = (`A temperatura em °Celsius è ${temperatura}`)
           ;break
       
       } 
    } else if (select1===0 && select2=== 1 )  {
        let formulaF= temperatura -459.67;
        resultado.innerHTML = (`${temperatura}K em Faherenheit é${formulaF}°Fahrenheit`)
    } 
    else if (select1===0  && select2===2 ){
        let formulac= temperatura -272.15;
        resultado.innerHTML = (`${temperatura}K em Celsius é ${formulac}°Celsius`)
    }
    else if(select1===1 && select2===0) {
        let formulad = temperatura + 255.67;
        resultado.innerHTML=(`${temperatura}°F em kelvin é ${formulad}Kelvin`)
    }
    else if (select1===1 && select2===2){
        let formulaA= (temperatura * 1.8) - 32
        resultado.innerHTML=(`${temperatura}°F em Celsius é ${formulaA}°Celsius`)
    }
    else if (select1===2 && select2===0){
        let  formulaK= temperatura + 273
        resultado.innerHTML=(`${temperatura}°C em kelvin é ${formulaK}Kelvin`)
   }
   else if (select1===2 && select2===1){
       let formulaH= (temperatura * 1.8) + 32
       resultado.innerHTML=(`${temperatura}°C em Celsus é ${formulaH}ºFahrenheit`)
   }
            
            // }
    // resultado.innerHTML= (`${temperatura} em Kelvin é ${formulaK}`);
    // }else if(select1 === 1){
    // resultado.innerHTML = (`${temperatura} em Fahrenheit é ${formulaF}°F`)


// // switch(select1){
//     case 0:
//        resultado.innerHTML= (`${temperatura}°C em Kelvin é ${formulaK}`);

//     break;


//     case 1:
//        resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF}°F`)
//     break;
    
//     default:
//        resultado.innerHTML = ("erro");

       
//     break;
// // }



    // }

// resultado.innerHTML=' A Temperatura é :' + formulaF + '°F';

    }
