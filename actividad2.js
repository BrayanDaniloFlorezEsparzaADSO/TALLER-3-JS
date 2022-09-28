addEventListener("DOMContentLoaded",()=>{
    
    let cont=0
    while (cont<=10){
        let n1=Number(prompt(`Ingrese el primer numero: `))
        let n2=Number(prompt(`Ingrese el segundo numero:`))
    
        let sum=(n1+n2)
        let rest=(n1-n2)
        let mult=(n1*n2)
        let div=(n1/n2)
        cont+=5
        
        document.write(`la suma es de: ,${sum}`)
        document.write(`la resta es de: ,${rest}`)
        document.write(`la division es de: ,${div}`)
        document.write(`la multiplicacion es de: ,${mult}`)
        document.write(`____________________________________________________________________________`)
    }   
    
      
    
})