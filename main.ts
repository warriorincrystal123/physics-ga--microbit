input.onButtonPressed(Button.B, function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMAMPM))
})
timeanddate.setTime(8, 59, 55, timeanddate.MornNight.AM)
pins.setAudioPin(AnalogPin.P1)
music.setVolume(255)
radio.setGroup(218)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(500)
basic.clearScreen()
loops.everyInterval(1000, function () {
    timeanddate.advanceBy(1, timeanddate.TimeUnit.Seconds)
})
basic.forever(function () {
    while (timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr) == "09:00.00") {
        radio.sendString("take your meds")
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.clearScreen()
    }
    while (pins.digitalReadPin(DigitalPin.P2) == 1 && (timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr) >= "09:00.00" && timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr) <= "09:05.00")) {
        music.playMelody("C C5 C C5 C C5 C C5 ", 250)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0 && (timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr) >= "09:00.00" && timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr) <= "09:05.00")) {
        basic.showIcon(IconNames.Yes)
        music.stopAllSounds()
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1 && timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr) == "09:05.00") {
        radio.sendString("meds weren't taken")
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.clearScreen()
    } else if (timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr) == "09:05.30") {
        music.stopAllSounds()
        basic.clearScreen()
    }
})
