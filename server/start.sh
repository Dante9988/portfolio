#!/bin/sh
set -e

echo "=== Starting Portfolio Backend ==="

echo "Attempting data ingestion..."
python -m server.scripts.ingest || echo "WARNING: Ingestion failed. Chat will work once DB is ready."

echo "Starting uvicorn..."
exec uvicorn server.main:app --host 0.0.0.0 --port ${PORT:-8000}
