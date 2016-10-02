<p align="center">
  <img src="https://github.com/lucasbento/graphql-correios/raw/master/content/logo.png">
</p>

<h1 align="center">GraphQL Correios</h1>

<p align="center">
  Calcule frete sem REST!
</p>

## Como utilizar

1. Abra a [interface GraphiQL][url-server];
1. Digite uma query.
	- Exemplo:
	```javascript
    	{
          calcPreco(
            nCdServico: "40010",
            sCepOrigem: "11065100",
            sCepDestino: "11721000",
            nVlPeso: "0.400",
            nCdFormato: "1",
            nVlComprimento: "25",
            nVlAltura: "15",
            nVlLargura: "15",
            nVlDiametro: "0"
          ) {
            Codigo
            Valor
            ValorMaoPropria
            ValorAvisoRecebimento
            ValorSemAdicionais
          }
        }
    ```
    - Retornará:
    ```json
    	{
          "data": {
            "calcPreco": [
              {
                "Codigo": 40010,
                "Valor": 1700,
                "ValorMaoPropria": 0,
                "ValorAvisoRecebimento": 0,
                "ValorSemAdicionais": 1700,
                "error": null
              }
            ]
          }
        }
    ```
> Teste essa query [clicando aqui][url-server-with-query].

Verifique os campos necessários para cálculo do frete no [PDF da API dos Correios][pdf-correios-api].

## Local

### Produção

```sh
  npm install
  npm run build
  npm start
```

### Desenvolvimento

```sh
  npm install
  npm run watch # Utilizando nodemon para hot-reloading
```

[url-server]: https://graphql-correios-buhpxhxlyr.now.sh/
[pdf-correios-api]: http://www.correios.com.br/para-voce/correios-de-a-a-z/pdf/calculador-remoto-de-precos-e-prazos/manual-de-implementacao-do-calculo-remoto-de-precos-e-prazos
[url-server-with-query]: https://graphql-correios-buhpxhxlyr.now.sh/?query=%7B%0A%20%20calcPreco(%0A%20%20%20%20nCdServico%3A%20%2240010%22%2C%0A%20%20%20%20sCepOrigem%3A%20%2211065100%22%2C%0A%20%20%20%20sCepDestino%3A%20%2211721000%22%2C%0A%20%20%20%20nVlPeso%3A%20%220.400%22%2C%0A%20%20%20%20nCdFormato%3A%20%221%22%2C%0A%20%20%20%20nVlComprimento%3A%20%2225%22%2C%0A%20%20%20%20nVlAltura%3A%20%2215%22%2C%0A%20%20%20%20nVlLargura%3A%20%2215%22%2C%0A%20%20%20%20nVlDiametro%3A%20%220%22%0A%20%20)%20%7B%0A%20%20%20%20Codigo%0A%20%20%20%20Valor%0A%20%20%20%20ValorMaoPropria%0A%20%20%20%20ValorAvisoRecebimento%0A%20%20%20%20ValorSemAdicionais%0A%20%20%20%20error%0A%20%20%7D%0A%7D
