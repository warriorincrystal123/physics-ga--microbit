input.onButtonPressed(Button.A, function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMAMPM))
})
input.onButtonPressed(Button.AB, function () {
    timeanddate.advanceBy(2, timeanddate.TimeUnit.Hours)
})
timeanddate.setTime(12, 30, 0, timeanddate.MornNight.PM)
basic.forever(function () {
    if ((0 as any) == (true as any)) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    } else {
        music.stopMelody(MelodyStopOptions.Foreground)
    }
})
