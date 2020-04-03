import { Router } from 'express'

const router = Router()

router.get('/posts', (req, res) => {
    res.json({ msg: 'Hello from API' })
})

export default router