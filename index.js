import express from 'express'
import { v4 } from 'uuid'
const app = express()
const PORT = 8000

app.use(express.json())

let users = [
  {
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  },
  {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  },
  {
    id: 3,
    email: 'emma.wong@reqres.in',
    first_name: 'Emma',
    last_name: 'Wong',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
  },
  {
    id: 4,
    email: 'eve.holt@reqres.in',
    first_name: 'Eve',
    last_name: 'Holt',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
  },
]

app.get('/users', (req, res) => {
  console.log('query параметры: ', req.query)
  res.status(200).json(users)
})

app.get('/users/:id', (req, res) => {
  //   console.log('id :', req.params.id)
  const user = users.find((user) => user.id == req.params.id)
  res.json(user)
})

app.post('/users', (req, res) => {
  console.log('Тело запроса :', req.body)
  const newUser = {
    id: v4(),
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    avatar: req.body.avatar,
  }
  users.push(newUser)
  console.log(users)
  res.json(newUser)
})

app.put('/users/:id', (req, res) => {
  console.log('параметр id :', req.params.id)
  for (let i = 0; i <= users.length; i++) {
    if (users[i].id == Number(req.params.id)) {
      ;(users[i].email = req.body.email),
        (users[i].first_name = req.body.first_name),
        (users[i].last_name = req.body.last_name)
    }
  }
  res.json(users[req.params.id])
})

app.listen(PORT, function () {
  console.log('Server started in PORT :', PORT)
})
