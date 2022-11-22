import 'dotenv/config'
import 'reflect-metadata'

import '@shared/containers'
import { app } from '@shared/routes'

const port = process.env.API_PORT || 3001

app.listen(port, () => console.log(`Running at ${port}`))
