import { container } from 'tsyringe'

import { SignInService } from './SignInService'

class SignInController {
  handle = async (req, res) => {
    const signInService = container.resolve(SignInService)

    const signInData = req.body

    const response = await signInService.execute(signInData)

    return res.json(response).status(200)
  }
}

export { SignInController }
