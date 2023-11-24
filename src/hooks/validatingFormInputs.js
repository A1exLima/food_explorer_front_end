function useValidateName(newName, setName, setValidName) {
  function checkName(newName) {
    const validation = newName.length >= 3

    setName(newName)

    return validation
  }

  setValidName(checkName(newName))
}

function useValidateEmail(newEmail, setEmail, setValidEmail) {
  function checkEmail(newEmail) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const validation = regexEmail.test(newEmail)

    setEmail(newEmail)

    return validation
  }

  setValidEmail(checkEmail(newEmail))
}

function useValidatePassword(newPassword, setPassword, setValidPassword) {
  function checkPassword(newPassword) {
    const validation = newPassword.length >= 6

    setPassword(newPassword)

    return validation
  }

  setValidPassword(checkPassword(newPassword))
}

function useValidateConfirmPassword(
  password,
  newConfirmPassword,
  setConfirmPassword,
  setValidConfirmPassword
) {
  function checkConfirmPassword(newConfirmPassword) {
    let validation

    if (newConfirmPassword === password) {
      return (validation = true)
    } else {
      return (validation = false)
    }
  }

  setConfirmPassword(newConfirmPassword)
  setValidConfirmPassword(checkConfirmPassword(newConfirmPassword))
}

export {
  useValidateName,
  useValidateEmail,
  useValidatePassword,
  useValidateConfirmPassword,
}
