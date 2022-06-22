class DateClass {
  
  getDate() {
    let date = new Date()
    let uk_format = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return uk_format
  }

}

module.exports = DateClass;