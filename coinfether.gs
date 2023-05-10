function fetchCoinData() {
  const apiKey = "";
  const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10";

  const options = {
    headers: {
      'X-CMC_PRO_API_KEY': apiKey
    }
  };

  const response = UrlFetchApp.fetch(url, options);
  const data = JSON.parse(response.getContentText());
  const coinData = data.data;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clearContents();

  sheet.getRange("A1").setValue("Coin");
  sheet.getRange("B1").setValue("Total Supply");

  for (let i = 0; i < coinData.length; i++) {
    const coinName = coinData[i].name;
    const totalSupply = coinData[i].total_supply;

    sheet.getRange(i + 2, 1).setValue(coinName);
    sheet.getRange(i + 2, 2).setValue(totalSupply);
  }
}

fetchCoinData()