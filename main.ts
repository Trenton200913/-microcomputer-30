input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.showString("B")
    basic.showString("C")
    basic.showString("D")
    basic.showString("E")
    basic.showString("F")
    basic.showString("G")
    basic.showString("H")
    basic.showString("I")
    basic.showString("J")
    basic.showString("K")
    basic.showString("M")
    basic.showString("N")
    basic.showString("O")
    basic.showString("P")
    basic.showString("Q")
    basic.showString("R")
    basic.showString("S")
    basic.showString("T")
    basic.showString("U")
    basic.showString("V")
    basic.showString("W")
    basic.showString("X")
    basic.showString("Y")
    basic.showString("Z")
    bitcommander.ledClear()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("HI")
    radio.setGroup(3)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    basic.showString("Stop please")
    bitcommander.ledClear()
    basic.clearScreen()
})
music.playMelody("- - G A G A - B ", 143)
basic.clearScreen()
basic.showLeds(`
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # # . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # # # .
    `)
basic.pause(bitcommander.readJoystick(BCJoystick.X))
basic.clearScreen()
basic.showString("MICROCOMPUTER OS 3.0")
basic.clearScreen()
basic.showString("(C)TMB LTD")
basic.clearScreen()
bitcommander.ledClear()
basic.forever(function () {
	
})
