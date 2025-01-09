from gtts import gTTS
import os


word = "woman;여자"

obj = gTTS(text=word[1], lang='ko', slow=False)
obj.save(f"audio/{word[0]}.mp3")


