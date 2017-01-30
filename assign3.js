let rav=[]


arrAdd(rav)

function arrAdd(rav){
    rav.push(4,5,6)
    
    console.log("Initial Values of Elments of Array",rav)
    for(let i=0;i<rav.length;i++){
        rav[i]=rav[i]+2
    }
    console.log("Values of Elements Of Array after addition",rav)
}