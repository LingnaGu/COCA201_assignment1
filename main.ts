let time = 0
let acc = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(time)
})
loops.everyInterval(2000, function () {
    basic.clearScreen()
    time += 1
})
basic.forever(function () {
    acc = input.acceleration(Dimension.Y)
    if (acc > 150) {
        time = 0
        basic.showIcon(IconNames.Heart)
    }
    if (time == 15) {
        music.playMelody("C D E F G A B C5 ", 120)
        time = 0
        basic.showString("BREAK!")
    }
})
