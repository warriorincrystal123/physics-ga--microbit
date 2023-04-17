input.onButtonPressed(Button.B, function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMAMPM))
})
timeanddate.setTime(8, 59, 55, timeanddate.MornNight.AM)
pins.setAudioPin(AnalogPin.P1)
music.setVolume(255)
servos.P0.setAngle(45)
loops.everyInterval(1000, function () {
    timeanddate.advanceBy(1, timeanddate.TimeUnit.Seconds)
})
basic.forever(function () {
    if (timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr) == "09:00.00") {
        servos.P0.setAngle(135)
        basic.pause(1000)
        servos.P0.setAngle(45)
        servos.P0.stop()
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        music.playMelody("C C5 C C5 C C5 C C5 ", 250)
    }
})