const express = require("express")
const { route } = require("./Appconfigs/routes/all_urls")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000;


const app = express()


const routes = require('./Appconfigs/routes/all_urls')
app.use('/',routes)


app.listen(port,()=>{
    console.log(`Server running... .. on port ${port}`)
})
