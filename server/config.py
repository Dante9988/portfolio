import os
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    openai_api_key: str = ""
    openai_base_url: str = "https://api.openai.com/v1"
    openai_model: str = "gpt-4.1-mini"
    embedding_model: str = "text-embedding-3-small"
    database_url: str = "postgresql://postgres:postgres@localhost:5432/portfolio"

    chunk_size: int = 800
    chunk_overlap: int = 120
    top_k: int = 5

    data_dir: str = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "data"))

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        extra = "ignore"

    def get_database_url(self) -> str:
        """Handle Railway's postgres:// vs postgresql:// URL format."""
        url = self.database_url
        if url.startswith("postgres://"):
            url = url.replace("postgres://", "postgresql://", 1)
        return url


@lru_cache()
def get_settings() -> Settings:
    return Settings()
