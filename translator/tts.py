from gtts import gTTS
import os

language = 'ko'

# Ensure the audio directory exists
if not os.path.exists('audio'):
    os.makedirs('audio')

with open('fluent625.txt', 'r', encoding='utf-8') as file:
    words = file.readlines()

for word in words:
    word = word.strip().split(";")
    if len(word) < 2:
        continue  # Skip lines that don't have both English and Korean words
    english_word = word[0].strip()
    korean_word = word[1].strip()
    print(korean_word)
    obj = gTTS(text=korean_word, lang=language, slow=False)
    obj.save(f"audio/{english_word}.mp3")