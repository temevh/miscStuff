from googletrans import Translator
import time

translator = Translator()

with open('fluent625EN.txt', 'r', encoding='utf-8') as file:
    words = file.readlines()

with open('fluent625.txt', 'w', encoding='utf-8') as file:
    for word in words:
        word = word.strip()
        try:
            translation = translator.translate(word, src='en', dest='ko')
            translated_word = translation.text
            file.write(f"{word};{translated_word}\n")
        except Exception as e:
            print(f"Error translating word '{word}': {e}")
            file.write(f"{word} - Translation error\n")
        time.sleep(5)