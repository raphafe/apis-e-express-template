import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses } from './database'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3005, () => {
    console.log("Servidor rodando na porta 3005")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

// getAll Courses

app.get('/courses', (req: Request, res: Response) => {
    res.status(200).send(courses)
})