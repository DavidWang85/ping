
let fadeout = document.querySelector('.take-bg');
let canvas = document.querySelector('#mycanvas');
let ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 500;

function init() {
    let curr_opacity = 1;
    function fadeOut() {
        if (curr_opacity > 0) {
            setTimeout(function () {
                curr_opacity = curr_opacity - 0.1;
                fadeout.style.opacity = curr_opacity;
                fadeOut()
            }, 120)
        }
    };
    fadeOut();
    getCanvas();
    showAlert();
}
init();

function getCanvas() {
    drawBackground();
}
//劃出除了照片外的背景
function drawBackground() {
    //太陽  
    const centerX = 0;
    const centerY = 0;
    const radius = 150;
    // 创建径向渐变
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, 'rgba(255, 165, 0, 1)'); // 内部橘红色
    gradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.5)'); // 中间半透明
    gradient.addColorStop(1, 'rgba(255, 165, 0, 0)'); // 外部全透明
    // 绘制太阳
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();




    //A雲朵陰影
    ctx.fillStyle = "gray"
    ctx.beginPath()
    ctx.arc(135, 75, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(175, 75, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(215, 100, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(175, 125, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()

    //A雲朵
    ctx.fillStyle = "#fff"
    ctx.beginPath()
    ctx.arc(80, 100, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(120, 75, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(160, 75, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(200, 100, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(120, 125, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(160, 125, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()


    //B雲朵陰影
    ctx.fillStyle = "gray"
    ctx.beginPath()
    ctx.arc(310, 75, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(350, 75, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(390, 100, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(350, 125, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()

    //B雲朵
    ctx.fillStyle = "#fff"
    ctx.beginPath()
    ctx.arc(260, 100, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(300, 75, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(340, 75, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(380, 100, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(300, 125, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(340, 125, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()



    //房屋四邊形
    ctx.fillStyle = "#f6e204"
    ctx.fillRect(50, 400, 150, 100);

    //房子頂端
    ctx.beginPath()
    ctx.moveTo(50, 400)
    ctx.lineTo(125, 350)
    ctx.lineTo(200, 400)
    ctx.closePath()
    ctx.fillStyle = "red"
    ctx.fill()

    //窗戶
    ctx.strokeStyle = "#0173ab"
    ctx.strokeRect(75, 415, 40, 40)

    ctx.beginPath()
    ctx.moveTo(75, 435)
    ctx.lineTo(115, 435)
    ctx.moveTo(95, 415)
    ctx.lineTo(95, 455)
    ctx.closePath()
    ctx.stroke()

    //樹幹主體
    ctx.fillStyle = "#6b4224"
    ctx.fillRect(530, 300, 100, 300);

    //往左延伸
    ctx.beginPath()
    ctx.arc(450, 450, 80, 0, 0.4 * Math.PI)
    ctx.lineTo(530, 500)
    ctx.closePath()
    ctx.fill()

    // 往右延伸
    // ctx.beginPath();
    // ctx.arc(580, 450, 80, 0.6 * Math.PI, Math.PI);
    // ctx.lineTo(400, 500);
    // ctx.closePath();
    // ctx.fill();

    //樹葉
    ctx.fillStyle = "green"
    ctx.beginPath()
    ctx.arc(500, 300, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(520, 280, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(480, 250, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(580, 220, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(530, 230, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(510, 210, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(550, 310, 35, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(580, 280, 45, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(600, 200, 38, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(550, 200, 30, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()

    //樹輪
    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.moveTo(550, 400)
    ctx.lineTo(550, 450)
    ctx.closePath()
    ctx.stroke()

    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.moveTo(570, 350)
    ctx.lineTo(570, 410)
    ctx.closePath()
    ctx.stroke()

    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.moveTo(590, 370)
    ctx.lineTo(590, 428)
    ctx.closePath()
    ctx.stroke()
}
function showAlert() {
    document.getElementById('popup').style.display = 'block';
    // 关闭弹出窗口
}
function closePopup(confirmation) {
    if (confirmation) {
        getCanvas()
        // 在这里添加 "Yes" 按钮的功能
        let img1 = new Image();
        img1.src = "./photo.png";
        // img1.src = "https://i.imgur.com/bOvods2.png";
        // ctx.drawImage(img1, 0, 325, 200, 250);

        let img2 = new Image();
        img2.src = "./photo2.png";
        // img2.src = "https://i.imgur.com/2JwG0VN.png";

        let x = 0;
        const targetX = 220;
        const speed = 1;

        let x2 = 350
        const targetX2 = 240;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            ctx.drawImage(img2, x2, 275, 330, 250);
            ctx.drawImage(img1, x, 325, 200, 250);
            x += speed;
            x2 -= speed;

            if (x < targetX) {
                requestAnimationFrame(draw);
            } else {
                // 圖片停在目標x座標
                // ctx.drawImage(img1, targetX, 0);
                heart()
            }
        }

        img1.onload = function () {
            draw();
        };
        document.getElementById('popup').style.display = 'none';
    } else {
        alert('拜託啦～點另外一邊🥹🥹');
        // 在这里添加 "No" 按钮的功能
        showAlert()
    }

}


//-------------------------愛心-----------------------
function heart() {
    let scale = 3; // Scale of the heart
    let scaleFrame = 0;
    let scaleX = 1;
    let scaleY = 1;
    let scaling = {
        FULL_PUMP: 1,
        HALF_RELEASE: 2,
        FULL_RELEASE: 3,
        REFILL: 4
    };
    let scaleState = scaling.FULL_PUMP;
    let pointArray = [];
    let heartColor = "#ad1457";
    // Move the origin point to the middle of the canvas
    ctx.translate(canvas.width / 1.85, canvas.height / 1.4);
    createPoints()
        .then(() => drawHeart())
        .then(() => makeHeartBeat())
        .catch((err) => console.error(err));
    function createPoints() {
        let i = 0.15;
        let halfpoint = false;
        let heartComplete = false;
        return new Promise((resolve, reject) => {
            while (heartComplete != true) {
                // Use mathematics to assign the heart's points on the canvas and store them in an array.
                let xValue = scale * 16 * Math.pow(Math.sin(i), 3);
                let yValue =
                    -scale * (13 * Math.cos(i)
                        - 5 * Math.cos(2 * i)
                        - 2 * Math.cos(3 * i)
                        - Math.cos(4 * i));

                if (xValue < 0) {
                    halfpoint = true;
                }

                if (halfpoint) {
                    if (xValue > 0) {
                        heartComplete = true;
                    }
                }
                let point = { x: xValue, y: yValue };
                pointArray.push(point);
                i += 0.03;

            }
            resolve();
        });
    }
    /* Function drawing the heart with a clockwise animation. */
    function drawHeart() {
        return new Promise((resolve, reject) => {
            if (pointArray.length != 0) {
                let interval;
                let index = 0;
                ctx.fillStyle = heartColor;
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#455a64";
                ctx.beginPath();
                interval = setInterval(() => {
                    // console.log("Drawing on the canvas by passing through every point in pointArray.");
                    ctx.lineTo(pointArray[index].x, pointArray[index].y);
                    ctx.fill();
                    ctx.stroke();
                    if (index < pointArray.length - 1) {
                        index++;
                    } else {
                        // When every point has been reached and the drawing is over, close the path, stop the animation and resolve the promise.
                        ctx.closePath();
                        clearInterval(interval);
                        resolve();
                    }
                }, 20);
            } else {
                reject(console.error("The existing pointArray does not have any elements."));
            }
        });
    }
}
