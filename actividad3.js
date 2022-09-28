addEventListener("DOMContentLoaded",()=>{
    let cont=0
    let sum=0
    let n=0.0
    while (cont<=5){
        prompt(`Ingrese nombre y apellido: `)
      n=Number(prompt(`Ingrese la nota: `))
      document.write(`_____________________________`)
    
      sum+n
      cont+=1
    if (cont==1){
        document.write(`ingrese mas notas: `)
    }else{
         promedio=Number(sum+n)/5
    
        document.write(`el promedio de los cinco es de: ${promedio}`) 
    }
     
    }
      
})