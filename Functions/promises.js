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
const getDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('This is the promise data')
            reject('This is my promise error')
        }, 2000);
    })
} 

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

