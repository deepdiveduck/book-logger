# Fullstack Starter

Personal starter template: Django API + React frontend.

## Prerequisites

- Python 3.12+
- Node.js 20+

## Quick start

### Backend (first time only)

```bash
cd backend
python -m venv .venv          # one-time: create virtual environment
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
```

### Backend (every session)

```bash
cd backend
source .venv/bin/activate
python manage.py runserver
```

API runs at `http://localhost:8000`.

### Frontend (first time only)

```bash
cd frontend
npm install
```

### Frontend (every session)

```bash
cd frontend
npm run dev
```

App runs at `http://localhost:5173`.

### Verify it works

Open `http://localhost:5173` — you should see "Backend status: ok".

## Structure

- `backend/` — Django API
- `frontend/` — React app (Vite)
