/*

PROJETO FEITO USANDO OS SEGUINTES ITENS:
PLATAFORMA:  Glitch ( https://encurta.eu/GlitchLuciano )
NPM: webp-converter ( https://encurta.eu/WebpConverter )

Como podem ver, este projeto é absurdamente simples, e o mesmo usa a NPM ( Node Package Manager ) "webp-converter".
Para converter a imagem necessária, você precisa fazer o download da mesma usando o método CURL no terminal Glitch. ( Exemplo abaixo )
curl https://encurta.eu/LucianoDeveloper --output imagem-convertida.jpeg

*/

// Baixando a NPM para conversão das imagens/gifs
const webp = require('webp-converter');

// Convertendo a imagem/gif para o formato webp
// teste.gif = nome da imagem para converter
// teste.webp = nome da imagem que será retornada como webp
// -q 80 = qualidade 80
const result = webp.gwebp("teste.gif", "teste.webp", "-q 80");

// Transformado o resultado em "response" e retornando o mesmo como uma imagem .webp
// **A imagem não apareceu após a conversão? SIMPLES! Basta abrir o terminal da Glitch, digitar "refresh" ( sem as aspas ) e apertar Enter.**
result.then((response) => {
  console.log(response);
});

// Não conseguiu fazer a conversão ou retornou algum erro inesperado? Acesse o GitHub desse projeto e deixe sua Issue, assim eu responderei rapidamente sua dúvida!
// GitHub: https://encurta.eu/ImageToWebp