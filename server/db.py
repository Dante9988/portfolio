import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from server.config import get_settings

CREATE_EXTENSION_SQL = "CREATE EXTENSION IF NOT EXISTS vector;"

CREATE_TABLE_SQL = """
CREATE TABLE IF NOT EXISTS portfolio_chunks (
    id          SERIAL PRIMARY KEY,
    chunk_id    TEXT UNIQUE NOT NULL,
    source      TEXT NOT NULL,
    title       TEXT NOT NULL,
    doc_type    TEXT NOT NULL CHECK (doc_type IN ('resume', 'project', 'about')),
    url         TEXT,
    chunk_index INTEGER NOT NULL,
    content     TEXT NOT NULL,
    embedding   vector(1536)
);
"""

CREATE_INDEX_SQL = """
CREATE INDEX IF NOT EXISTS portfolio_chunks_embedding_idx
ON portfolio_chunks
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 50);
"""


def get_connection():
    settings = get_settings()
    return psycopg2.connect(settings.get_database_url())


def init_db():
    conn = get_connection()
    conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
    cur = conn.cursor()
    try:
        cur.execute(CREATE_EXTENSION_SQL)
    except Exception as e:
        print(f"Warning: Could not create vector extension: {e}")
        print("Trying without extension — table will be created without vector column.")
    cur.execute(CREATE_TABLE_SQL)
    try:
        cur.execute(CREATE_INDEX_SQL)
    except Exception:
        pass
    conn.commit()
    cur.close()
    conn.close()
    print("Database schema initialized successfully.")
