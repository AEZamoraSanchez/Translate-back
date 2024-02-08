const deepl = require('deepl-node')
require('dotenv').config()

const apiKey  = process.env.API_KEY_DEEPL
const translator = new deepl.Translator(apiKey)

async function handleTranslatorDeepl ({ text, fromLanguage, toLanguage }) {
    console.log(text, fromLanguage, toLanguage)
    return translator
   .translateText( text, fromLanguage, toLanguage )
   .then((result) => {
       return (result);
   })
   .catch((error) => {
       return (error);
   });
}

module.exports = handleTranslatorDeepl;