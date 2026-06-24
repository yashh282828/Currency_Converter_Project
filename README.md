# Currency Converter (Vanilla JS)

A simple currency converter web app that fetches live exchange rates from **currencyapi.com** and displays converted values in a table.

## Features

- Choose base currency (INR / USD / EUR)
- Enter an amount
- Fetches live rates from CurrencyAPI
- Renders results dynamically in a table

## Files

- `index.html` – UI markup (form, table, navigation)
- `main.js` – Fetches exchange rates and populates the results table
- `style.css` – Styling

## How it works

1. User selects a currency and enters an amount.
2. Clicking **Submit** triggers `populate(value, currency)` in `main.js`.
3. The app calls CurrencyAPI:

   `https://api.currencyapi.com/v3/latest?apikey=YOUR_KEY&base_currency=...`

4. Returned rates are mapped into table rows.

## Setup / Run

### Option A: Open directly (quick demo)

Open `index.html` in your browser.

> Note: some browsers may block requests from `file://` URLs. For best results, use Option B.

### Option B: Use a local web server (recommended)

Serve the project folder with any static server (e.g., Live Server in VSCode).

## API key

`main.js` currently contains an API key placeholder/inline key:

- `main.js`: `apikey=...`

For production, move the key to a secure backend (or proxy), since exposing API keys in frontend code is not secure.

## License

All rights reserved.

