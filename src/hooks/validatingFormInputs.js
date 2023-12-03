function useValidateName(newName, setName, setValidName) {
  switch (true) {
    case newName == "":
      setName(newName)
      setValidName("Nome obrigatório")
      break

    case newName.length < 3:
      setName(newName)
      setValidName("O nome deve conter no mínimo 3 caracteres.")
      break

    default:
      setName(newName)
      setValidName(true)
  }
}

function useValidateEmail(newEmail, setEmail, setValidEmail) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  switch (true) {
    case newEmail == "":
      setEmail(newEmail)
      setValidEmail("Email obrigatório")
      break

    case !regexEmail.test(newEmail):
      setEmail(newEmail)
      setValidEmail("Por favor, insira um email válido.")
      break

    default:
      setEmail(newEmail)
      setValidEmail(true)
  }
}

function useValidatePassword(newPassword, setPassword, setValidPassword) {
  function checkPassword(newPassword) {
    const validation = newPassword.length >= 6

    setPassword(newPassword)

    return validation
  }

  setValidPassword(checkPassword(newPassword))
}

function useValidateOldPassword(
  oldPassword,
  setOldPassword,
  setValidOldPassword
) {
  function checkPassword(oldPassword) {
    const validation = oldPassword.length >= 6

    setOldPassword(oldPassword)

    return validation
  }

  setValidOldPassword(checkPassword(oldPassword))
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
  useValidateOldPassword,
}
