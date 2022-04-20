//How many languages are there in the countries API
const axios = require('axios');
const API_URL = 'https://restcountries.com/v3/all'
const totalLanguage = async () => {
    const res = await axios(API_URL);
    let result = res.data
    let languagesArray = [], language = []
    //creating array of object of languages country wise
    for (let [key, element] of Object.entries(result)) {

        if (element.languages) {

            languagesArray.push(Object.keys(element.languages))
        }

    }

    let uniq = [...new Set(languagesArray)];
    console.log("Total Number of languages in country api " + uniq.length)
}

totalLanguage()