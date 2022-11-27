const headers = {
  'Host': 'www.mmobomb.com',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
  'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Enconding': 'gzip, deflate, br',
  'Connection': 'keep-alive'
}

async function buscandoAPI(){
const teste = await fetch('https://www.mmobomb.com/api1/games?sort-by=release-date', {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'include', // include, *same-origin, omit
  headers: headers
}).then(res => res.json())
console.log(teste)
}

buscandoAPI()

