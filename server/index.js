// config inicial
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()



app.use(cors())
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//Entity routes
const contractRoutes = require('./routes/contractRoutes')
app.use("/new-contract", contractRoutes)

//porta
mongoose.connect("mongodb+srv://luiz:zb.bPV2JQ9B.Ka9@apiflexge.afvffqc.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("conectamos ao banco")
    app.listen(3001)
})
.catch(err => console.log(err))