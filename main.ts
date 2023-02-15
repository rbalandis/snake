function MovePlayer () {
    led.unplot(prevx, prevy)
    led.plotBrightness(x, y, brightness)
    prevx = x
    prevy = y
    if (x == foodx && y == foody) {
        brightness += 30
        ShowFood()
    }
    if (brightness > 255) {
        basic.showString("WIN!")
    }
}
function ShowFood () {
    foodx = randint(0, 4)
    foody = randint(0, 4)
    led.plotBrightness(foodx, foody, 10)
}
input.onButtonPressed(Button.A, function () {
    x += -1
    if (x < 0) {
        x = 4
    }
})
input.onButtonPressed(Button.AB, function () {
    y += 1
    if (y > 4) {
        y = 0
    }
})
input.onButtonPressed(Button.B, function () {
    x += 1
    if (x > 4) {
        x = 0
    }
})
let foody = 0
let foodx = 0
let brightness = 0
let prevy = 0
let prevx = 0
let x = 0
let y = 0
basic.clearScreen()
y = 0
x = 0
prevx = -1
prevy = -1
brightness = 60
ShowFood()
basic.forever(function () {
    MovePlayer()
})
