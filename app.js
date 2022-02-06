
class User
{
  country = 'Ukraine'
  colorSkin = 'White'
  _salary = 8000
  constructor(name = 'John', surname = 'Doe', birthday = '0000.00.00', salary = 1000)
  {
    this.name = name
    this.surname = surname
    this.birthday = birthday
    this._salary = salary

    this.user = function () {
      console.log( this.name, this.surname)
    }

    this.userAge = function ()
    {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const dob = new Date(birthday)
      const dobNow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())

      let age = today.getFullYear() - dob.getFullYear()
      if (today < dobNow) {
        age = age -1
      }
      console.log(`Возраст: ${age}`)
    }
  }
  get salary() {
    return this._salary
  }
  set salary(value) {
    if (value > this._salary) {
      this._salary = value
    } else {
      console.log('Err')
    }
  } 
}

const user = new User('Dexter', 'Morgan', '1985.10.15', 9000)
user.user()
user.userAge()
user.salary = 10000
console.log(user.salary)
