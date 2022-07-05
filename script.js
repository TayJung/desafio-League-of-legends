const [ input1, input2] = document.querySelectorAll('input')
console.log(input1, input2)
const img = document.querySelector('.box-btn')

function handleChange(){
    if(input1 && input2.value.length >= 8){
        img.classList.remove('btn')
        img.classList.add('box-btn1')       
    }else{
        img.classList.remove('btn')
        img.classList.add('box-btn1')
    }
}

input1.addEventListener('input', handleChange)
input2.addEventListener('input', handleChange)