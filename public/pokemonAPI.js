function maisUm(){
    let img = document.querySelector('#img')
    let input = document.querySelector('#input').value++
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`
    if(input > 0 && input >= 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${input}`
        axios.get(url).then((res) => {
            let data = res.data
            document.querySelector('#sub').innerHTML = `<button class="button2" onclick="MenosUM()">Anterior</button>`
            document.querySelector('#sub2').innerHTML = `<button class="button2" onclick="maisUm()">Proximo</button>`
            img.setAttribute('src', data.sprites.front_default)
            document.querySelector('#h3').innerHTML = `${data.name}`
        })
    }else{
        h3.innerHTML = '<b>Você deve colocar um número acima de 0, EX: 1 2 3!</b>'
    }
}

function menosUm(){
    let img = document.querySelector('#img')
    let input = document.querySelector('#input').value--
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`
    if(input > 0 && input >= 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${input}`
        axios.get(url).then((res) => {
            let data = res.data
            document.querySelector('#sub').innerHTML = `<button class="button2" onclick="MenosUM()">Anterior</button>`
            document.querySelector('#sub2').innerHTML = `<button class="button2" onclick="maisUm()">Proximo</button>`
            img.setAttribute('src', data.sprites.front_default)
            document.querySelector('#h3').innerHTML = `${data.name}`
        })
    }else{
        h3.innerHTML = '<b>Você deve colocar um número acima de 0, EX: 1 2 3!</b>'
    }
}


function MenosUM(){
    return menosUm()
}

function pokemonAPI (){
    let img = document.querySelector('#img')
    const input = document.querySelector('#input').value
    if(input > 0 && input >= 1){
        const url = `https://pokeapi.co/api/v2/pokemon/${input}`
        axios.get(url).then((res) => {
            let data = res.data
            document.querySelector('#sub').innerHTML = `<button class="button2" onclick="MenosUM()">Anterior</button>`
            document.querySelector('#sub2').innerHTML = `<button class="button2" onclick="maisUm()">Proximo</button>`
            img.setAttribute('src', data.sprites.front_default)
            document.querySelector('#h3').innerHTML = `${data.name}`
        })
    }else{
        h3.innerHTML = '<b>Você deve colocar um número acima de 0, EX: 1 2 3!</b>'
    }
}
