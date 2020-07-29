// student score. student possible total score 
// Output: 15/20 -> You got a C (75%)!
// A 90 - 100, B 80 - 89, C 70 - 79, D 60 - 69, F 0 - 59

let studentScore = function(score, totalScore) {
    if (typeof score !== 'number' || typeof totalScore !== 'number'){
        throw Error('Is required to put numbers to obtain the score')
    }

    let grade = (score / totalScore) * 100
    let letterGrade
    if (grade >= 90) {
        letterGrade = 'A'
    } else if (grade >= 80) {
        letterGrade = 'B'
    } else if (grade >= 70) {
        letterGrade = 'C'
    } else if (grade >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${grade.toFixed(2)}%)!`
}
try {
    const grade = studentScore(18, 'a')
    console.log(grade)
} catch (error) {
    console.log(error.message)
}
