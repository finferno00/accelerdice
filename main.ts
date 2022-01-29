input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
    }
    basic.pause(200)
    basic.showNumber(randint(1, 6))
})
