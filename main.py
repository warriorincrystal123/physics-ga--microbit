if (0) == (True):
    music.start_melody(music.built_in_melody(Melodies.RINGTONE), MelodyOptions.ONCE)
else:
    music.stop_melody(MelodyStopOptions.FOREGROUND)