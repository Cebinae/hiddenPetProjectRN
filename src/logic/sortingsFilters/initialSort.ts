// let arr = [89,3,6,2,7,4,2,1,45,67,4,]

export let pricesBubbleSort = (array:Array<Object> )=>{               
 
    for (let j=0; j<array.length; j++ ) {
        for (let i=0; i<array.length-1; i++ ){

            if (array[i].price?.USD*100>array[i+1].price?.USD*100){ 
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
                }

            }
    }
}


