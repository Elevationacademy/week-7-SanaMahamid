function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1
    
    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix
}



let matrix = generateMatrix(3, 4)
console.log(matrix[1][2]) //prints 7

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}

function get(rowNum, colNum){
    return matrix[rowNum][colNum]
}

console.log(get(1,2))

function print(matrix){
    let row = ""
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            row += matrix[i][j] + "\t"
        }
        console.log(row)
        row = ""
    }
}

print(matrix)

function printColumn(matrix, colNum) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][colNum])
    }
}

printColumn(matrix,1) //prints 2, 6, 10 on separate lines

function printRow(matrix,rowNum){
    let row =""
    for (let i = 0; i < matrix[rowNum].length; i++) {
        row += matrix[rowNum][i] + "\t"
    }
    console.log(row)
}

printRow(matrix,1)

function alter(matrix, rowNum, colNum, value){
    matrix[rowNum][colNum] = value
}

alter(matrix, 1, 3, 174)
print(matrix)
