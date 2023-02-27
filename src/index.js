module.exports = function check(str, bracketsConfig) {
  const arr = []

  if (str.length % 2 !== 0) {
    return false
  }
  for (let i = 0; i < str.length; i++) {
    for (let e = 0; e < bracketsConfig.length; e++) {
      if (
        str[i] === bracketsConfig[e][1] &&
        arr[arr.length - 1] === bracketsConfig[e][0]
      )
        arr.pop()
      else if (str[i] === bracketsConfig[e][0]) arr.push(str[i])
    }
  }

  if (arr.length === 0) return true
  else return false
}
