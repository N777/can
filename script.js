var canvas;
var context;

window.onload = function() {
	   // Определение контекста рисования
	   canvas = document.getElementById("drawingCanvas");
	   context = canvas.getContext("2d");  
       
	   // Обновляем холст через 0.02 секунды
	   setTimeout("drawFrame()", 20);
}

// Устанавливаем начальную позицию квадрата
var squarePosition_x = 10;
var squarePosition_y = 0;

function drawFrame() {
	// Очистить холст
    
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	// Вызываем метод beginPath(), чтобы убедиться,
	// что мы не рисуем часть уже нарисованного содержимого холста
	context.beginPath();
	
	// Рисуем квадрат размером 10x10 пикселов в текущей позиции
	context.rect(squarePosition_x, squarePosition_y, 10, 10);
	context.lineStyle = "#109bfc";
	context.lineWidth = 1;
	context.stroke();
	
	// Перемещаем квадрат вниз на 1 пиксел (где он будет 
	// прорисован в следующем кадре)
	squarePosition_y += 1;
	
	// Рисуем следующий кадр через 20 миллисекунд
	setTimeout("drawFrame()", 20);
}
// Тип данных, представляющий отдельный мячик
function Ball(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.active = true;
    this.radius = radius;
    this.strokeColor = "black";
    this.fillColor = "red";
}

function getRandomInt(max) {
    var temp = Math.floor(Math.random() * max);
    while (temp == 0){
        temp = getRandomInt(max);
    }
    return temp;
}
// Массив, содержащий информацию обо всех мячиках на холсте
var balls = [];
for(var i = 0; i < 20; i++){
    var ball = new Ball(50,50,getRandomInt(10),getRandomInt(10),20);
    balls.push(ball);
}
function stopBall() {
    for(var i=0; i<balls.length; i++) {
        var ball = balls[i];
        ball.active = false;
    }  
}
function moveBall() {
    for(var i=0; i<balls.length; i++) {
        var ball = balls[i];
        ball.active = true;
    }  
}
function clearBalls() {
    // Удаляем все мячики
    balls = [];
}

function drawFrame() {
    // Очистить холст
    canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight*0.92;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Вызываем метод beginPath(), чтобы убедиться,
    // что мы не рисуем часть уже нарисованного содержимого холста
    context.beginPath();

    // Перебираем все мячики
    for(var i=0; i<balls.length; i++) {
        // Перемещаем каждый мячик в его новую позицию
        var ball = balls[i];
        if (ball.active){
        ball.x += ball.dx;
        ball.y += ball.dy;
        }
        // Добавляем эффект "гравитации", который ускоряет падение мячика
        

        // Добавляем эффект "трения", который замедляет движение мячика
        

        // Если мячик натолкнулся на край холста, отбиваем его
        if ((ball.x + ball.radius > canvas.width) || (ball.x - ball.radius < 0)) {
            ball.dx = -ball.dx;
        }

        // Если мячик упал вниз, отбиваем его, но слегка уменьшаем скорость
        if ((ball.y + ball.radius > canvas.height) || (ball.y - ball.radius < 0)) { 
            ball.dy = -ball.dy; 
        }

        // Проверяем, хочет ли пользователь соединительные линии
        
        context.beginPath();
        context.fillStyle = ball.fillColor;
        

        // Рисуем мячик
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
        context.lineWidth = 1;
        context.fill();
        context.stroke(); 
    }

    // Рисуем следующий кадр через 20 миллисекунд
    setTimeout("drawFrame()", 20);
}
window.onload = function() {
    // Определение контекста рисования
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");
      
    // Обновляем холст через 0.02 секунды
    setTimeout("drawFrame()", 20);
}