let array = ['BINH','HUNG','PHUOC','CAO','KHANH']
function allLongestStrings(inputArray) {
    let arrs = inputArray.sort((a,b)=>(a.length<b.length)?1:-1)
    let arr = []
    let max = arrs[0].length
    arrs.forEach((element,index) => {
        if(element.length >= max) {
            arr.push(element)
        }
    });
    console.log(arr)
}
allLongestStrings(array)