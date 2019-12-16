let express = require('express')

let app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(process.env.PORT || 3000)