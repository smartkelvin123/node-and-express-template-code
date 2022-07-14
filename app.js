const express = require('express')
const app = express()
// let { people } = require('./data')

// static assets
app.use(express.static('/method.public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

// app.post('/api/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).json({ success: true, person: name })
// })

// app.post('/api/postman/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide name value' })
//   }
//   res.status(201).json({ success: true, data: [...people, name] })
// })

// app.post('/login', (req, res) => {
//   const { name } = req.body
//   if (name) {
//     return res.status(200).send(`Welcome ${name}`)
//   }

//   res.status(401).send('Please Provide Credentials')
// })

// app.put('/api/people/:id', (req, res) => {
//   const { id } = req.params
//   const { name } = req.body

//   const person = people.find((person) => person.id === Number(id))

//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${id}` })
//   }
//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name
//     }
//     return person
//   })
//   res.status(200).json({ success: true, data: newPeople })
// })

// app.delete('/api/people/:id', (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id))
//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${req.params.id}` })
//   }
//   const newPeople = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   )
//   return res.status(200).json({ success: true, data: newPeople })
// })

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})







// const express = require('express')
// const app = express()
// const morgan = require('morgan')
// const logger = require('./logger')
// const authorize = require('./authorize')
// //  req => middleware => res

// // app.use([logger, authorize])
// // app.use(express.static('./public'))
// app.use(morgan('tiny'))

// app.get('/', (req, res) => {
//   res.send('Home')
// })
// app.get('/about', (req, res) => {
//   res.send('About')
// })
// app.get('/api/products', (req, res) => {
//   res.send('Products')
// })
// app.get('/api/items', (req, res) => {
//   console.log(req.user)
//   res.send('Items')
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })


// const express = require('express')
// const app = express()
// const logger = require('./logger')
// const authorize = require('./authorize')
// //  req => middleware => res
// app.use([logger, authorize])
// // api/home/about/products
// app.get('/', (req, res) => {
//   res.send('Home')
// })
// app.get('/about', (req, res) => {
//   res.send('About')
// })
// app.get('/api/products', (req, res) => {
//   res.send('Products')
// })
// app.get('/api/items', (req, res) => {
//   console.log(req.user)
//   res.send('Items')
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })








// const express = require('express')
// const app = express()

// //  req => middleware => res

// const logger = (req, res, next) => {
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear()
//   console.log(method, url, time)
//   next()
// }


// app.get('/',logger, (req, res) => {
//   res.send('Home')
// })
// app.get('/about', logger,(req, res) => {
//   res.send('About')
// })






// params querryjs

// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.get('/', (req, res) => {
//   res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products', (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product
//     return { id, name, image }
//   })

//   res.json(newProducts)
// })
// app.get('/api/products/:productID', (req, res) => {
//   // console.log(req)
//   // console.log(req.params)
//   const { productID } = req.params

//   const singleProduct = products.find(
//     (product) => product.id === Number(productID)
//   )
//   if (!singleProduct) {
//     return res.status(404).send('Product Does Not Exist')
//   }

//   return res.json(singleProduct)
// })

// app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
//   console.log(req.params)
//   res.send('hello world')
// })

// app.get('/api/v1/query', (req, res) => {
//   // console.log(req.query)
//   const { search, limit } = req.query
//   let sortedProducts = [...products]

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search)
//     })
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit))
//   }
//   if (sortedProducts.length < 1) {
//     // res.status(200).send('no products matched your search');
//     return res.status(200).json({ sucess: true, data: [] })
//   }
//   res.status(200).json(sortedProducts)
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })


// const express = require('express')
// const path = require('path')
// const app = express()
// // app.get('/', (req, res) =>{
// //   res.sendFile(path.join(__dirname, './navbar-app/index.html'))
// // })
// app.use (express.static('/public'))

// app.all('#', (req, res) =>{
//   res.status(404).send('resources not found')
// })
// app.listen(5000, () => {
//   console.log('server is listening on port 5000...')
// })


// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   console.log('user hit the resource')
//   res.status(200).send('Home Page')
// })

// app.get('/about', (req, res) => {
//   res.status(200).send('About Page')
// })

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>resource not found</h1>')
// })

// app.listen(5000, () => {
//   console.log('server is listening on port 5000...')
// })

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
// const http = require('http')
// const { readFileSync } = require('fs')

// // get all files
// const homePage = readFileSync('./navbar-app/index.html')
// const homeStyles = readFileSync('./navbar-app/styles.css')
// const homeImage = readFileSync('./navbar-app/Annotation 2022-07-07 045517 133.jpg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')

// const server = http.createServer((req, res) => {
//   // console.log(req.method)
//   const url = req.url
//   console.log(url)

//   if (url === '/') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write(homePage)
//     res.end()
//   }
//   else if  (url === '/about') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1>about page</h1>')
//     res.end()
//   }

// //   stlyes
//   else if (url === '/Styles.css') {
//     res.writeHead(200, { 'content-type': 'text/css' })
//     res.write(homeStyles)
//     res.end()
//   }
//   else if (url === '/Annotation 2022-07-07 045517 133.jpg') {
//     res.writeHead(200, { 'content-type': 'text/navbar-app/Annotation 2022-07-07 045517 133.jpg' })
//     res.write(homeImage)
//     res.end()
//   }
//   else if (url === '/browser-app.js') {
//     res.writeHead(200, { 'content-type': 'text/javascript' })
//     res.write(homeLogic)
//     res.end()
//   }
// //   404
//   else {
//     res.writeHead(404, { 'content-type': 'text/html' })
//     res.write('<h1>page not found</h1>')
//     res.end()
//   }
// })

// server.listen(5000)


















// const { readFileSync } = require('fs')
// const http = require('http')

// const homepage = readFileSync('./index.html')

// const server = http.createServer((req, res) => {
//   // console.log(req.method)
//   const url = req.url
//   // home page
//   if (url === '/') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write(homepage)
//     res.end()
//   }
//   // about page
//   else if (url === '/about') {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     res.write('<h1>about page</h1>')
//     res.end()
//   }
//   // 404
//   else {
//     res.writeHead(404, { 'content-type': 'text/html' })
//     res.write('<h1>page not found</h1>')
//     res.end()
//   }
// })

// server.listen(5000)


    // const http = require('http')
// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     res.writeHead(200, {'content-type': 'text/html'})
//     res.write("<h1>Welcome</h1>")
//     res.end()
    
// })
// server.listen(5000)



// const path = require('path')

// const app = express()

// // setup static and middleware
// app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

// app.all('*', (req, res) => {
//   res.status(404).send('resource not found')
// })

// app.listen(5000, () => {
//   console.log('server is listening on port 5000....')
// })