const translateBtn = document.querySelector('#translate-btn');
const textInput = document.querySelector('#text');
const translationDiv = document.querySelector('#translation');
const apiKey = process.env.API_KEY;
const endpoint = "https://api.cognitive.microsofttranslator.com/translate";
const toLanguage = "hi";  // Change this to the target language you want to translate to

translateBtn.addEventListener('click', async () => {
  const headers = {
    "Ocp-Apim-Subscription-Key": apiKey,
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Region": "eastus"
  };
  const body = [{ text: textInput.value }];
  const params = new URLSearchParams({
    "api-version": "3.0",
    "to": toLanguage
  });
  const response = await fetch(`${endpoint}?${params}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });
  const result = await response.json();
  const translatedText = result[0].translations[0].text;
  translationDiv.textContent = translatedText;
});
