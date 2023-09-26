## Introduction

This is a hybrid Next.js, Tailwind CSS, and Python app that uses Next.js as the frontend, styled by Tailwind CSS, and FastAPI as the API backend.

## How It Works

The Python/FastAPI server is mapped into Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/digitros/nextjs-fastapi/blob/main/next.config.js) to map any request to `/api/:path*` to the FastAPI API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.

## Developing Locally

You can clone & create this repo with the following command

```bash
npx create-next-app dillan-prince-demo --example "https://github.com/dillan-prince/ilant-health-assessment"
```

## Getting Started

To begin, you will need a Google Books API key. Instructions on how to create one can be found here [here](https://developers.google.com/books/docs/v1/using#APIKey). You will need a Google developer account and to have created a project in Google Cloud. After that, you can enable the Google Books API for your project via the "Enabled APIs & services" tab, and create an API key via the "Credentials" tab.

Once you have a Google Books API key, create a `Constants.py` file in the `/api` folder:

```python
API_KEY = "<Your API key>"
```

This file will not be committed, so your API key will be safe.

Next, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).
