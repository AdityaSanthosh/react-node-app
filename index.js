const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const express = require('express')

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" })
})

app.get('/movies', async (req,res)=> {
  const movies = await prisma.movie.findMany({})
  res.json(movies)
})

app.get('/actors', async (req,res)=> {
  const actors = await prisma.actor.findMany({})
  res.json(actors)
})

app.get('/producers', async (req,res)=> {
  const producers = await prisma.producer.findMany({})
  res.json(producers)
})

app.get('/actors/:id', async (req,res)=>{
  const {id} = req.params
  const actor = await prisma.actor.findUnique({
    where: {
      id: Number(id)
    }
  })
  res.json(actor)
})

app.get('/producers/:id', async (req,res)=>{
  const {id} = req.params
  const producer = await prisma.producer.findUnique({
    where: {
      id: Number(id)
    }
  })
  res.json(producer)
})

app.get('/movies/:id', async (req,res)=> {
  const {id} = req.params
  const movie = await prisma.movie.findUnique({
    where: {
      id: Number(id)
    }
  })
  res.json(movie)
})

app.post('/actors', async (req,res)=> {
  const {name,bio} = req.body
  const newactor = await prisma.actor.create({
    data: {
      name,
      bio
    }
  })
  res.json(newactor)
})

app.post('/producers', async (req,res)=> {
  const {name,bio} = req.body
  const newproducer = await prisma.producer.create({
    data: {
      name,
      bio
    }
  })
  res.json(newproducer)
})

app.post('/movies',async (req,res)=>{
  const {name,yearOfRelease,plot,actorid,producerid} = req.body
  const movie = await prisma.movie.create({
    data: {
      name,
      yearOfRelease,
      plot,
      actors: {connect:{id:actorid}},
      producer : {connect:{id:producerid}}
    },
  })
  res.json(movie)
})

app.delete('/actors/:id', async (req, res) => {
  const { id } = req.params
  const actor = await prisma.actor.delete({
    where: {
      id : Number(id),
    },
  })
  res.json(actor)
})

app.delete('/producers/:id', async (req, res) => {
  const { id } = req.params
  const producer = await prisma.producer.delete({
    where: {
      id : Number(id),
    },
  })
  res.json(producer)
})

app.delete('/movies/:id', async (req,res)=> {
  const {id} = req.params
  const movie = await prisma.movie.delete({
    where: {
      id : Number(id),
    }
  })
})

app.put('/producers/:id', async (req,res)=> {
  const {id} = req.params
  const {name,bio} = req.body
  const producer = await prisma.producer.update({
    where: {
      id: id
    },
    data: {
      name,
      bio
    }
  })
  res.json(producer)
})

app.put('/actors/:id', async (req,res)=> {
  const {id} = req.params
  const {name,bio} = req.body
  const actor = await prisma.producer.create({
    where: {
      id: id
    },
    data: {
      name,
      bio
    }
  })
  res.json(actor)
})

app.put('/movies/:id',async (req,res)=>{
  const {id} = req.params
  const {name,yearOfRelease,plot,actorid,producerid} = req.body
  const movie = await prisma.movie.update({
    where: {
      id:id
    },
    data: {
      name,
      yearOfRelease,
      plot,
      actors: {connect:{id:actorid}},
      producer : {connect:{id:producerid}}
    },
  })
  res.json(movie)
})

app.listen(PORT,()=> {
  console.log(`Listening on ${PORT}`)
})