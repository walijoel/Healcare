// Función para obtener la lista de alimentos y sus detalles desde la hoja de cálculo
function getFoodList() {
  const spreadsheetId = '14W_eO0vfdVJgu_ES1KnzPOgWVXt-KDFIC3otoEUEgQU';
  const sheetName = 'Web App';
  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  const range = sheet.getRange('A2:AW' + sheet.getLastRow());
  const values = range.getValues();
  return values;
}

// Función para obtener los detalles del alimento seleccionado
function getFoodDetails(selectedFood) {
  const spreadsheetId = '14W_eO0vfdVJgu_ES1KnzPOgWVXt-KDFIC3otoEUEgQU';
  const sheetName = 'Web App';
  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  const data = sheet.getRange('A2:AW' + sheet.getLastRow()).getValues();
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === selectedFood) {
      return data[i];
    }
  }
  return ['No encontrado', 'No encontrado'];
}

// Función para devolver la interfaz de usuario HTML cuando la aplicación es accedida a través de un navegador
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}