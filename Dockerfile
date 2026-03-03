FROM python:3.12-slim

WORKDIR /app

COPY server/requirements.txt ./server/requirements.txt
RUN pip install --no-cache-dir -r server/requirements.txt

COPY server/ ./server/
COPY data/ ./data/

RUN chmod +x ./server/start.sh

ENV PYTHONUNBUFFERED=1

EXPOSE 8000

CMD ["./server/start.sh"]
