import * as Yup from 'yup'

const register = {
  min: { value: 2, error: 'Registro muito curto!' },
  max: { value: 30, error: 'Registro muito longo!' },
  matches: {
    value: /^([A-z0-9])+$/,
    error: 'Registro deve conter apenas letras ou números!'
  }
}

const full_name = {
  required: { error: 'Informe seu nome completo!' },
  min: { value: 10, error: 'Nome completo muito curto!' },
  max: { value: 60, error: 'Nome completo muito longo!' },
  matches: {
    value: /^([A-z ])+$/,
    error: 'Nome completo deve conter apenas letras!'
  }
}

const email = {
  required: { error: 'Informe um e-mail!' },
  email: { error: 'Informe um e-mail valido!' },
  matches: {
    value: /^(\w\.?)+@(\w\.?)+\.(\w\.?)+$/,
    error: 'Informe um e-mail valido!'
  }
}

const password = {
  required: { error: 'Informe uma senha!' },
  max: { value: 30, error: 'Senha muito longa!' },
  min: { value: 8, error: `Sua senha deve conter mais que 8 caracteres!` },
  matches: [
    {
      value: /^(?=.*[@$!%*?&])/,
      error: 'Sua senha deve conter um caractere especial!'
    },
    {
      value: /^(?=.*[A-Z])/,
      error: 'Sua senha deve conter uma letra maiúscula!'
    },
    {
      value: /^(?=.*[a-z])/,
      error: 'Sua senha deve conter uma letra minúscula!'
    },
    {
      value: /^(?=.*\d)/,
      error: 'Sua senha deve conter um número!'
    }
  ]
}

const confirmPassword = {
  match: { error: 'As senhas são diferentes!' },
  required: { error: 'Você precisa confirmar sua senha!' }
}

export const profileYupSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(full_name.min.value, full_name.min.error)
    .max(full_name.max.value, full_name.max.error)
    .matches(full_name.matches.value, full_name.matches.error),

  email: Yup.string()
    .email(email.email.error)
    .matches(email.matches.value, email.matches.error),

  password: Yup.string().required(password.required.error),

  newPassword: Yup.string()
    .min(password.min.value, password.min.error)
    .max(password.max.value, password.max.error)
    .matches(password.matches[0].value, password.matches[0].error)
    .matches(password.matches[1].value, password.matches[1].error)
    .matches(password.matches[2].value, password.matches[2].error)
    .matches(password.matches[3].value, password.matches[3].error),

  confirmNewPassword: Yup.string().oneOf(
    [Yup.ref('newPassword')],
    confirmPassword.match.error
  ),

  register: Yup.string()
    .min(register.min.value, register.min.error)
    .max(register.max.value, register.max.error)
    .matches(register.matches.value, register.matches.error)
})
