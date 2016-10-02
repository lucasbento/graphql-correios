import Correios from 'node-correios';
import validateInput from '../validation';

const correios = new Correios();

async function calcRequest(args) {
  return await new Promise((res, rej) => {
    correios.calcPreco(args, (error, result) => {
      if (error) {
        rej(error);
      }

      const response = result.map(calculation => {
        const { Codigo } = calculation;
        let {
          Valor,
          ValorMaoPropria,
          ValorAvisoRecebimento,
          ValorSemAdicionais,
        } = calculation;

        Valor = parseInt(Valor.replace(',', '.'), 10) * 100;
        ValorMaoPropria = parseInt(ValorMaoPropria.replace(',', '.'), 10) * 100;
        ValorAvisoRecebimento = parseInt(ValorAvisoRecebimento.replace(',', '.'), 10) * 100;
        ValorSemAdicionais = parseInt(ValorSemAdicionais.replace(',', '.'), 10) * 100;

        return {
          Codigo,
          Valor,
          ValorMaoPropria,
          ValorAvisoRecebimento,
          ValorSemAdicionais,
        };
      });

      res(response);
    });
  });
}

export default async function calcPreco(args) {
  const errorsOnInput = validateInput(args);

  if (errorsOnInput) {
    return errorsOnInput;
  }

  try {
    const response = await calcRequest(args);

    return response;
  } catch (error) {
    return {
      error,
    };
  }
}
