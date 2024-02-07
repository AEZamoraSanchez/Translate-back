const deepl = require('deepl-node')
require('dotenv').config()

const apiKey  = process.env.API_KEY_DEEPL
const translator = new deepl.Translator(apiKey)

function handleTranslatorDeepl ({ text, fromLanguage, toLanguage }) {
     translator
    .translateText( text, fromLanguage, toLanguage )
    .then((result) => {
        return (result.text);
    })
    .catch((error) => {
        return (error);
    });
}

module.exports = handleTranslatorDeepl;