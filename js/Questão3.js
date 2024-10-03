const fs = require('fs');


const dados = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));


const diasComFaturamento = dados.filter(dia => dia.valor > 0);
const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));


const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaFaturamento = somaFaturamento / diasComFaturamento.length;


const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;


console.log(`menor valor de faturamento em um dia do mês: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`maior valor de faturamento em um dia do mês: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`);