# FetchCoin App

The FetchCoin App is a Google Apps Script application that fetches coin data from CoinMarketCap API and displays the coin names and their total supplies in a Google Sheet.

## Prerequisites

Before using the FetchCoin App, ensure you have the following:

- A Google account
- Access to Google Sheets
- A CoinMarketCap API key (obtainable from the CoinMarketCap website)

## Installation

To install and use the FetchCoin App, follow these steps:

1. Open a new or existing Google Sheet.
2. Go to "Extensions" in the menu and select "Apps Script".
3. Replace the existing code in the Apps Script editor with the provided `fetchCoinData` function code.
4. Replace `"YOUR_COINMARKETCAP_API_KEY"` with your actual CoinMarketCap API key.
5. Save the script and close the Apps Script editor.
6. Go back to your Google Sheet and you should see a new menu option named "Custom Menu".
7. Click on "Custom Menu" and select "Fetch Coin Data".
8. The script will fetch the latest coin data from CoinMarketCap API and populate the coin names and total supplies in the active sheet.

> Note: The script fetches data for the top 10 cryptocurrencies by default. You can modify the `limit` parameter in the `url` variable to fetch more or fewer coins as required.



## Contributing

Contributions to the FetchCoin App are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

