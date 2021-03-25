let result = document.getElementById('result')
let submit = document.getElementById('submit')

function HexaNumber(e){
    e.preventDefault()

    let input = document.getElementById('number1').value

    if(input === ''){
        alert('Please Provide a Number!')
    }else if(input < 0){
        alert('please provide a Positive number')
    }else{
        result.style.visibility = 'visible'
    }
    //calculatehexa
    hexanumber = Number(input).toString(16).toUpperCase()
    result.innerHTML = hexanumber

}
submit.addEventListener('click',HexaNumber)