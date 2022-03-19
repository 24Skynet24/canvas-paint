window.onload = ()=> {
    canvas.width = (window.innerWidth - 1);
    canvas.height = (window.innerHeight - 1);
}

// Основные настройки
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let color = 'rgba(0, 0, 0, 1)'; // цвет линии по умолчанию
let fill = 7; // толщина линии по умолчанию


// Изменение толщины
document.querySelector('#little').addEventListener('click', ()=> fill = 3);
document.querySelector('#middle').addEventListener('click', ()=> fill = 7);
document.querySelector('#big').addEventListener('click', ()=> fill = 13);


// Изменение цвета
document.querySelector('#black').addEventListener('click', ()=> color = 'rgba(0, 0, 0, 1)');
document.querySelector('#white').addEventListener('click', ()=> color = 'rgba(255, 255, 255, 1)');
document.querySelector('#gray').addEventListener('click', ()=> color = 'rgba(127,127,127, 1)');
document.querySelector('#brown').addEventListener('click', ()=> color = 'rgba(136,0,21, 1)');
document.querySelector('#red').addEventListener('click', ()=> color = 'rgba(237,28,36, 1)');
document.querySelector('#orange').addEventListener('click', ()=> color = 'rgba(255,127,39, 1)');
document.querySelector('#yellow').addEventListener('click', ()=> color = 'rgba(255,242,0, 1)');
document.querySelector('#green').addEventListener('click', ()=> color = 'rgba(34,177,76, 1)');
document.querySelector('#cyan').addEventListener('click', ()=> color = 'rgba(0,162,232, 1)');
document.querySelector('#blue').addEventListener('click', ()=> color = 'rgba(63,72,204, 1)');
document.querySelector('#purple').addEventListener('click', ()=> color = 'rgba(163,73,164, 1)');
document.querySelector('#violet').addEventListener('click', ()=> color = 'rgba(200,191,231, 1)');
document.querySelector('#color').addEventListener('input', (e)=> color = e.target.value)


// Очистка
let clear = document.querySelector('.clear');
clear.addEventListener('click', ()=> {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
})


// Рисование
canvas.onmousedown = ()=>{
    canvas.onmousemove = (e)=>{
        let x = e.offsetX;
        let y = e.offsetY;

        ctx.beginPath();

        ctx.strokeStyle = color;
        ctx.fillStyle = color;

        ctx.arc(x, y, fill, 0, Math.PI * 2, false);

        ctx.stroke();
        ctx.fill()
    }

    canvas.onmouseup = ()=>{
        canvas.onmousemove = null
    }
}