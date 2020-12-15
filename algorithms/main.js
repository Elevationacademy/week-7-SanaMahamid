//ex1
function printStars(num){
    let stars = ""
    for(let i=0; i<num; i++){
        stars += "*"
        console.log(stars)
    }
}
//printStars(5)


//ex2
function printBackwardsStars(num){
    let stars = ""
    let i = num
    while(i>0){
        stars += "*"
        i--
    }
    for(i=0; i<num; i++){
        console.log(stars)
        stars = stars.substring(1,stars.length)
    }

}
//printBackwardsStars(6)


//ex3
function printStarSeries(num, count){
    while(count>0){
        printStars(num)
        printBackwardsStars(num-1)
        count--
    }
}
//printStarSeries(5,3)


//ex4
function reverse(str){
    let reversed = ""
    for(let i=str.length-1; i>=0; i--){
        reversed += str[i]
    }
    console.log(reversed)
    return reversed
}
//reverse("dog") 
//reverse("race car") 

//ex5
function isPalindrom(str){
    str = str.replace(/\s/g, '').toLowerCase()
    let reversed = reverse(str)
    if(str === reversed){
        console.log(true)
        return true
    }
    console.log(false)
    return false
}
//isPalindrom("Taco Cat")
//isPalindrom("abc")

//ex6
function encrypt(str){
    let enc = ""
    for(let i in str){
        let next
        if(str[i] === "z"){
            next = "a"
            enc += next
        } else{
            next = String.fromCharCode(str.charCodeAt(i) + 1)
            enc += next
        }
    }
    console.log(enc)
    return enc
}
//encrypt("cat")
//encrypt("abc")
//encrypt("xyz")


//ex7
function decrypt(str){
    let dec = ""
    for(let i in str){
        let prev
        if(str[i] === "a"){
            prev = "z"
            dec += prev
        } else{
            prev = String.fromCharCode(str.charCodeAt(i) - 1)
            dec += prev
        }
    }
    console.log(dec)
    return dec
}
//decrypt("dbu")
//decrypt("abc")


//ex8
function jumble(arr1, arr2) {
    let jumbledArr = []
    for(let a of arr2) {
        arr1.push(a)
    }
    while(arr1.length) {
        let randomNumber = Math.floor(Math.random() * arr1.length)
        jumbledArr.push(arr1.splice(randomNumber, 1)[0])
    }
    console.log(jumbledArr)
    return jumbledArr
}
//const colors = ["red", "indigo", "white", "teal", "yellow"]
//const foods = ["bread", "cheese", "cucumber"]
//jumble(colors, foods) // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]


//ex9
function getLetter() {
    const rawDist = {
      A: 60,
      B: 10,
      C: 10,
      D: 20
    }
    let randomNum = Math.floor((Math.random() * 100) + 1)
    const letters = Object.keys(rawDist)
    let currentPercentage = 0
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i]
      if (rawDist[letter] + currentPercentage >= randomNum) {
        console.log(letter)
        return letter
      } else {
        currentPercentage += rawDist[letter]
      }
    }
  }
/*getLetter()
getLetter()
getLetter()
getLetter()*/

//Extensions
//ext1
function printInLoop(words){
    while(true){
        for(let word of words){
            console.log(word)
        }
    }
}
//printInLoop(["down", "the", "rabbit", "hole"])


//ext2
function findClosest(points, point){
    let distances = []
    for(let p of points){
        let a = p.x - point.x
        let b = p.y - point.y
        let dist = Math.sqrt(a*a + b*b)
        distances.push({x:p.x, y:p.y, d:dist})
    }
    distances.sort((p1,p2) => (p1.d > p2.d) ? 1 : ((p1.d < p2.d) ? -1 : 0))
    let closest = {x:distances[0].x, y:distances[0].y}
    console.log(closest)
    return closest
}
/*let pizzaLocations = [
    { x: 6, y: 12 },
    { x: 3, y: 1 },
    { x: 9, y: 0 },
    { x: 4, y: 10 }
]
let homeLocation = { x: 4, y: 2 }
findClosest(pizzaLocations, homeLocation)*/


//ext3
function clacShifts(secret){
    let a = "a"
    let shiftByArr = []
    for(let i in secret){
        shiftByArr[i] = secret.charCodeAt(i) - a.charCodeAt(0) + 1
    }
    return shiftByArr
}
function secretEncrypt(str, secret){
    let shiftByArr = clacShifts(secret)
    let enc = ""
    let shiftBy = 0
    for(let i=0; i<str.length; i++){
        if(str[i] === "z"){
            enc += String.fromCharCode("a".charCodeAt(0) + shiftByArr[shiftBy] - 1) 
        }else{
            enc += String.fromCharCode(str.charCodeAt(i) + shiftByArr[shiftBy])
        }
        shiftBy++
        if(shiftBy === shiftByArr.length){
            shiftBy = 0
        }
    }
    console.log(enc)
    return enc
}
//secretEncrypt("elephant", "cab")
//secretEncrypt("zlephant", "cab")


//ext4
function secretDecrypt(str, secret){
    let shiftByArr = clacShifts(secret)
    let dec = ""
    let shiftBy = 0
    for(let i=0; i<str.length; i++){
        if(str[i] === "a"){
            dec += String.fromCharCode("z".charCodeAt(0) - shiftByArr[shiftBy] + 1) 
        }else{
            dec += String.fromCharCode(str.charCodeAt(i) + shiftByArr[shiftBy])
        }
    }
    console.log(dec)
    return enc
}






