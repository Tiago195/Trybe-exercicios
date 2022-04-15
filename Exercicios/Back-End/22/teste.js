const puppeteer = require('puppeteer');
const arrayDeMensagem = [
  "tudo po, fiz ate esse robozin aqui pra responder o form",
  "Hoje foi MAAAAARAVILHOSO",
  "da CR ai mariotto https://github.com/Tiago195/Trybe-exercicios/tree/master/Exercicios/Back-End/22",
];
async function sendMessage(count, page, thisBTN) {
  await page.keyboard.type(arrayDeMensagem[count]);
  await thisBTN.click();
}

async function nextPage(page) {
  await page.evaluate(() => {
    document.querySelector('.ButtonWrapper-sc-__sc-1qu8p4z-0').click();
  });
}

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://bit.ly/3zkqbYC');

  await nextPage(page);
  await nextPage(page);
  const thisBTN = await page.waitForSelector('.jFGwbJ');
  let count = 0;
  let idInterval = setInterval(async() => {
    if(count < 2) {
      await sendMessage(count, page, thisBTN)
      count++
    }else {
      await page.keyboard.type(arrayDeMensagem[count]);
      await page.mouse.click(275.875, 393)
      clearInterval(idInterval);
    }
  }, 5000)
 
  await browser.close();
})();