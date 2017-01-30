
let rav=[]
 loopArr(rav)

function loopArr(rav){
    rav.push(1,'dog','one')
    
    for(let i=0;i<rav.length;i++)
    {
        console.log('index value '+i+' :',rav[i])
    }
   console.log("Index value of Array Elements after addition",rav)
}