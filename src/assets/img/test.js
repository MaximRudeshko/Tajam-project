    const arr = [1,2,3,4,5]

        arr.forEach((item, i, arr) => {
            if(i === arr.length - 1){
                const temp = arr[i]
                arr[i] = arr[i + 1] 
                arr[arr.length - 1] = temp  
            }else if(i === 0){
                let temp = arr[i]
                arr[i] = arr[0]
                arr[0] = temp
            }
            
        })
        console.log(arr)