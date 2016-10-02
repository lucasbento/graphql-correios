const validateInput = args => {
  const {
    nCdServico,
    sCepOrigem,
    sCepDestino,
    nVlPeso,
    nCdFormato,
    nVlComprimento,
    nVlAltura,
    nVlLargura,
    nVlDiametro,
  } = args;

  if (!nCdServico) {
    return {
      error: 'CEP de destino inválido',
    };
  }

  if (!sCepOrigem) {
    return {
      error: 'CEP de origem inválido',
    };
  }

  if (!sCepDestino) {
    return {
      error: 'CEP de destino inválido',
    };
  }

  if (!nVlPeso) {
    return {
      error: 'Valor de peso inválido',
    };
  }

  if (!nCdFormato) {
    return {
      error: 'Formato de encomenda inválido',
    };
  }

  if (!nVlComprimento) {
    return {
      error: 'Comprimento de encomenda inválido',
    };
  }

  if (!nVlAltura) {
    return {
      error: 'Altura de encomenda inválido',
    };
  }

  if (!nVlLargura) {
    return {
      error: 'Largura de encomenda inválido',
    };
  }

  if (!nVlDiametro) {
    return {
      error: 'Diâmetro de encomenda inválido',
    };
  }

  return null;
};

export default validateInput;
