# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
from time import sleep

import config
import telebot

bot = telebot.TeleBot(config.token)


@bot.message_handler(content_types=["text"])
def repeat_all_messages(message):  # Название функции не играет никакой роли
    data = bot.get_updates()
    print(data[0].message)
    sleep(5)
    # bot.send_message(message.chat.id, message.text)


if __name__ == '__main__':
    bot.infinity_polling()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
