function ageValidation(age) {

  const now = new Date()
  const userAge = new Date(age)

  const yearDiff = now.getFullYear() - userAge.getFullYear()

  let actualAge = yearDiff

  if (now.getMonth() < userAge.getMonth() ||
    (now.getMonth() === userAge.getMonth() && now.getDate() < userAge.getDate())) {
    actualAge = actualAge - 1
  }

  if (actualAge >= 14) {
    return true
  }

  return false
}

console.log(ageValidation('2010-08-23'))