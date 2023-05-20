const express = require("express")
const cors = require("cors")
const app = express()
const apikey = "9a101e6534724c26a1fbff03690f154c"
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`

app.use(cors({
    origin: "*"
}))

app.use('/', express.static("static"))

app.get('/news/:id', (req,res) => {
    const index = req.params.id
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data.articles[index]);
        const html = 
        `
            <h1>${data.articles[index].title}</h1>
            <h2>${data.articles[index].description}</h2>
            <img src="${data.articles[index].urlToImage}"></img>
            <h3>${data.articles[index].content}</h3>
            <i>${data.articles[index].author}</i>
            <h5>${data.articles[index].publishedAt}</h5>
        `
        res.send(html);
    })
    .catch(error => console.log(error)) 
    
})

app.listen(3000, () => console.log('server started'))