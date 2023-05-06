const apikey = "9a101e6534724c26a1fbff03690f154c"
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`
const content = document.getElementById("content")

fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => fillpage(data))
    .catch(error => console.log(error)) 

function fillpage(data) {
    console.log(data);
    data.articles.forEach(elem => {
        content.innerHTML += 
        `
            <div class="news">
                <img src=${elem.urlToImage} />
                <div>
                    <p>${elem.content}</p>
                    <p>Description: ${elem.description}</p>
                    <p>Author: ${elem.author}</p>
                    <p>Date: ${elem.publishedAt}</p>
                </div>
            </div>
        `
    })
}