const updateButton = document.querySelector('#btn');
const adviceNumber = document.querySelector('#advice-id');
const adviceDescription = document.querySelector('#advice');

async function getApiData() {
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    return await response.json()
}

async function getAdviceAndNumberAdvice() {
    const adviceDatas = await getApiData()
    const idAdvice = adviceDatas.slip.id
    const advice = adviceDatas.slip.advice

    adviceNumber.innerText = `advice #${idAdvice}` 
    adviceDescription.innerText = `“${advice}”`
}

updateButton.addEventListener('click', getAdviceAndNumberAdvice);

