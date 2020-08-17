const getDataCallback = (callback) => {
    setTimeout(()=>{
        callback(undefined, "This time is up")
    },2000)
}

getDataCallback((err, data) => {
    if (!err){
        console.log(data)
    } else {
        console.log(err)
    }
})

// Promise
const getDataPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
        }, 2000);
    })
} 

getDataPromise(2).then((data)=>{
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (error) => {
        console.log(error)
    })
},(error) => {
    console.log(error)
})

getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})
