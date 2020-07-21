const arr = [1,2,3,4,5]

setInterval(() => {
    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr.length; i++){
            if(j === 0){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

            if(j === arr.length - 1){
                let temp = arr[j]
                arr[j] = arr[0]
                arr[0]
            }
        }
    }
    
    console.log(arr)
},2000)


arr.forEach((item, i, arr) => {
    if(i === arr.length - 1){
        const temp = arr[i]
        arr[i] = arr[i + 1] 
        arr[arr.length - 1] = temp  
    }else if(i === 0){
        let temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
    }else{
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i - 1] = temp 
    }
    
})

