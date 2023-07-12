
export let compareArrays = (savedArr: Array<object>, currentArr:Array<object>)=>{
    let resultsPool: Array<object> = []  
    // console.log('SAVED 1', savedArr[0])
    // console.log('SAVED LAST', savedArr[savedArr.length-1])

    // console.log('CURRENT 1', currentArr[0])
    // console.log('CURRENT LAST', currentArr[currentArr.length-1])
         
    const shouldEvenFind = ():boolean=> {          // if stringified arrays are equal we dont even need to run a heavy comparsion             
      let start = performance.now()                 //ok, toString() is better than stringify
      let equality =  savedArr.toString()===currentArr.toString()? true : false
      let timeTaken = performance.now() - start;
      console.log('STRING COMPARSION is', equality)
      console.log('strings comparsion took', timeTaken)
      return equality
    }

    
    const findOut = ()=>{                                         //if comparsion is needed
         for(let i=0; i<currentArr.length; i++){                  //TODO: rewrite on counter-based comparsion, not loop in loop...
          let currentItem = currentArr[i]                         //will be much faster
          // console.log('current item is'+  JSON.stringify(currentItem))
          savedArr.some(element => {
            // console.log('saved items is comparing as'+ JSON.stringify(element))
            if (element.extra.offerId.toString() === currentItem.extra.offerId.toString()) {
              return true;
            }
            return false;
          })?console.log('not a new item')  : resultsPool.push(currentItem)
      }
    }
        

      shouldEvenFind()? console.log('no need to compare'): findOut() 
      console.log('new items are', resultsPool)
    return resultsPool
}

