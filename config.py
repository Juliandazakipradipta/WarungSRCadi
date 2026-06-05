from dotenv import load_dotenv
import os

load_dotenv()  # Baca file .env

class Config:
    # Database MySQL
    MYSQL_HOST     = os.getenv('MYSQL_HOST', 'localhost')
    MYSQL_USER     = os.getenv('MYSQL_USER', 'root')
    MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD', '')
    MYSQL_DB       = os.getenv('MYSQL_DB', 'warung_src_adi')
    MYSQL_CURSORCLASS = 'DictCursor'  # Hasil query berupa dictionary (lebih mudah dipakai)

    # Flask
    SECRET_KEY = os.getenv('SECRET_KEY', 'warung_src_adi_secret_2025')

    # Telegram Bot
    TELEGRAM_TOKEN   = os.getenv('TELEGRAM_TOKEN', '')
    TELEGRAM_CHAT_ID = os.getenv('TELEGRAM_CHAT_ID', '')

    # Fonnte WhatsApp API Gateway
    FONNTE_TOKEN     = os.getenv('FONNTE_TOKEN', '')