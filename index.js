function sum (arr) {
  return arr.reduce((acc, value) => BigInt(acc) + BigInt(value), BigInt(0))
}

function diagonalDifference (arr, n) {
  const isPrincipalDiagonalElement = (i, j) => (i === j)
  const isSecondaryDiagonalElement = (i, j) => (i + j === n + 1)

  let principalDiagonal = 0
  let secondaryDiagonal = 0

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (isPrincipalDiagonalElement(i + 1, j + 1)) {
        principalDiagonal += arr[i][j]
      }

      if (isSecondaryDiagonalElement(i + 1, j + 1, n)) {
        secondaryDiagonal += arr[i][j]
      }
    }
  }

  return Math.abs(principalDiagonal - secondaryDiagonal)
}

function plusMinus (arr, n) {
  const isPositive = (value) => (value > 0)
  const isNegative = (value) => (value < 0)
  const isZero = (value) => (value === 0)

  let positiveCount = 0
  let negativeCount = 0
  let zeroCount = 0

  arr.forEach((element) => {
    if (isPositive(element)) {
      positiveCount += 1
    }

    if (isNegative(element)) {
      negativeCount += 1
    }

    if (isZero(element)) {
      zeroCount += 1
    }
  })

  console.log((positiveCount / n).toFixed(6))
  console.log((negativeCount / n).toFixed(6))
  console.log((zeroCount / n).toFixed(6))
}

function staircase (n) {
  for (let symbols = 1; symbols <= n; symbols += 1) {
    const spaces = n - symbols
    let result = ''

    for (let i = 0; i < spaces; i += 1) {
      result += ' '
    }

    for (let i = 0; i < symbols; i += 1) {
      result += '#'
    }

    console.log(result)
  }
}

function miniMaxSum (arr) {
  const remove = (array, index) => array.filter((value, i) => {
    if (index !== i) {
      return value
    }

    return null
  })

  const getMaxSum = (array, currentValue) => {
    const arraySum = array.reduce((acc, value) => acc + value)

    if (arraySum > currentValue) {
      return arraySum
    }

    return currentValue
  }

  const getMinSum = (array, currentValue) => {
    const arraySum = array.reduce((acc, value) => acc + value)

    if (arraySum < currentValue) {
      return arraySum
    }

    return currentValue
  }

  let maxSum = 0
  let minSum = 0

  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      maxSum = getMaxSum(remove(arr, i), maxSum)
      minSum = maxSum
    } else {
      maxSum = getMaxSum(remove(arr, i), maxSum)
      minSum = getMinSum(remove(arr, i), minSum)
    }
  }

  console.log(`${minSum} ${maxSum}`)
}

function birthdayCakeCandles (candles) {
  const tallest = Math.max(...candles)

  let tallestCount = 0

  candles.forEach((value) => {
    if (value === tallest) {
      tallestCount += 1
    }
  })

  console.log(tallestCount)
}

function timeConversion (s) {
  const isAM = (value) => value.includes('AM')

  const [hours, minutes, secondsWithAmPm] = s.split(':')

  const seconds = secondsWithAmPm.substr(0, 2)

  let result = ''

  if (isAM(s)) {
    if (Number(hours) === 12) {
      result += '00'
    } else {
      result += hours
    }
  } else if (Number(hours) === 12) {
    result += '12'
  } else {
    result += `${Number(hours) + 12}`
  }

  return `${result}:${minutes}:${seconds}`
}

function gradingStudents (grades) {
  const normalizeGrades = (grade) => {
    if (grade < 38) {
      return grade
    }

    const nextMultipleOfFive = (parseInt(grade / 5, 10) + 1) * 5

    if ((nextMultipleOfFive - grade) < 3) {
      return nextMultipleOfFive
    }

    return grade
  }

  return grades.map((grade) => normalizeGrades(grade))
}

function countApplesAndOranges (s, t, a, b, apples, oranges) {
  const isInsideSamHouse = (value) => {
    if (value >= s && value <= t) {
      return true
    }

    return false
  }

  const applesInsideHouse = apples
    .map((apple) => apple + a)
    .filter(isInsideSamHouse)

  const orangesInsideHouse = oranges
    .map((orange) => orange + b)
    .filter(isInsideSamHouse)

  console.log(applesInsideHouse.length)
  console.log(orangesInsideHouse.length)
}

function kangaroo (x1, v1, x2, v2) {
  if ((x1 < x2) && (v1 < v2)) {
    return 'NO'
  }

  if ((v1 !== v2) && ((x2 - x1) % (v1 - v2)) === 0) {
    return 'YES'
  }

  return 'NO'
}

function reverseArray (a) {
  return a.reverse()
}

function hourglassSum (arr) {
  const result = []

  const getHourglassMaxValue = (array, i, j) => {
    const middle = array[i][j]
    const top = array[i - 1][j] + array[i - 1][j - 1] + array[i - 1][j + 1]
    const bottom = array[i + 1][j] + array[i + 1][j - 1] + array[i + 1][j + 1]

    const total = top + bottom + middle

    result.push(total)
  }

  for (let i = 1; i < arr.length - 1; i += 1) {
    for (let j = 1; j < arr.length - 1; j += 1) {
      getHourglassMaxValue(arr, i, j)
    }
  }

  return Math.max(...result)
}

function rotateLeft (d, arr) {
  for (let i = 0; i < d; i += 1) {
    arr.push(arr.shift())
  }

  return arr
}

function matchingStrings (strings, queries) {
  return queries.map((query) => {
    const result = strings.map((string) => {
      if (string === query) {
        return 1
      }

      return 0
    })

    return result.reduce((acc, value) => acc + value, 0)
  })
}

module.exports = {
  sum,
  diagonalDifference,
  plusMinus,
  staircase,
  miniMaxSum,
  birthdayCakeCandles,
  timeConversion,
  gradingStudents,
  countApplesAndOranges,
  kangaroo,
  reverseArray,
  hourglassSum,
  rotateLeft,
  matchingStrings,
}
