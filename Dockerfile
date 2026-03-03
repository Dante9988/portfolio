FROM python:3.12-slim

WORKDIR /app

COPY server/requirements.txt ./server/requirements.txt
RUN pip install --no-cache-dir -r server/requirements.txt

COPY server/ ./server/
COPY data/ ./data/

ENV PYTHONUNBUFFERED=1

EXPOSE 8000

CMD ["sh", "-c", "python -m server.scripts.ingest && uvicorn server.main:app --host 0.0.0.0 --port ${PORT:-8000}"]
