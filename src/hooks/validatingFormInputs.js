export function validateEmail(newEmail, setEmail, setValidEmail) {
  
  function checkEmail(newEmail) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const validation = regexEmail.test(newEmail)

    setEmail(newEmail)

    return validation
  }

  setValidEmail(checkEmail(newEmail))
}

export function validatePassword(newPassword, setPassword, setValidPassword) {
  function checkPassword(newPassword) {
    
    const validation = newPassword.length >= 4

    setPassword(newPassword)

    return validation
  }

  setValidPassword(checkPassword(newPassword))
}
