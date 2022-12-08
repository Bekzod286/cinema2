import {movies} from '../modules/data.js'

let ul = document.querySelector('.promo__interactive-list')
let searchInp = document.querySelector('#search')
let poster = document.querySelector('.promo__bg') 
let modal_1 = document.querySelector('.modal_1')
let modal_bg = document.querySelector('.modal_bg')
let exit = document.querySelector('.exit')
let img = document.querySelector('.modal_1 img')
let name = document.querySelector('.modal_name')
let genre = document.querySelector('.modal_genre')
let rating = document.querySelector('.rating')
let desc = document.querySelector('.modaldesc')

searchInp.oninput = () => {
    let searchkey = searchInp.value.trim().toLowerCase()

    let filtered = movies.filter(item => {
        let title = item.Title.trim().toLowerCase()

        if(title.includes(searchkey)) {
            return item
        }
    })

    reload(filtered, searchkey)
}

reload(movies)
function reload(arr, val = "") {
    ul.innerHTML = ""
    showPoster(arr[0])
    let re = new RegExp(val, 'g')

    for(let item of arr) {
        let title = item.Title.toLowerCase().replace(re, `<b>${val}</b>`)

        let li = document.createElement('li')
        let del = document.createElement('div')

        li.classList.add('promo__interactive-item')
        del.classList.add('delete')

        li.innerHTML = title

        li.append(del)
        ul.append(li)
        li.onclick = () => {
    modal_1.style.display= "block"
    modal_bg.style.display= "block"
    img.src = item.Poster
    name.innerHTML = item.Title
    genre.innerHTML = item.Genre
    desc.innerHTML = item.Plot
}
exit.onclick = () => {
    modal_1.style.display= "none"
    modal_bg.style.display= "none"
}
// modal_bg.onclick = () => {
//     modal_1.style.display = 'none'
//     modal_bg.style.display = 'none'
// }   
    }
}


function showPoster(data) {
    poster.style.backgroundImage = `url(${data.Poster})`
}
// let names = document.querySelectorAll('.promo__interactive-item')
