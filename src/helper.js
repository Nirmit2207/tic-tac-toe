const winCriteria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

const findWinner = (data) => {
    
    for (let i = 0; i < winCriteria.length; i++) {
        const [one, two, three] = winCriteria[i]
        if (data[one] !== null && data[one] === data[two] && data[one] === data[three]) {
            return data[one];
        }
    }
    return null
}

export default findWinner