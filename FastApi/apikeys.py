import os
from dotenv import load_dotenv

# Carrega variáveis do .env local (somente em desenvolvimento)
load_dotenv()

google_api_key = os.getenv("GOOGLE_API_KEY")
openai_api_key = os.getenv("OPENAI_API_KEY")
softdesk_hash_api = os.getenv("SOFTDESK_HASH_API")