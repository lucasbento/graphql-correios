import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import PrecoType from './PrecoType';
import calcPreco from '../service/CalcPreco.js';

export default new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    calcPreco: {
      type: new GraphQLList(PrecoType),
      args: {
        nCdServico: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Código(s) de serviço(s) do Correios',
        },
        sCepOrigem: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'CEP de origem',
        },
        sCepDestino: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'CEP de destino',
        },
        nVlPeso: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Peso da encomenda, incluindo sua embalagem, deve ser informado em quilogramas.',
        },
        nCdFormato: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Formato da encomenda (incluindo embalagem).',
        },
        nVlComprimento: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Comprimento da encomenda (incluindo embalagem), em centímetros',
        },
        nVlAltura: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Altura da encomenda (incluindo embalagem), em centímetros',
        },
        nVlLargura: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Largura da encomenda (incluindo embalagem), em centímetros',
        },
        nVlDiametro: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'Diâmetro da encomenda (incluindo embalagem), em centímetros',
        },
      },
      resolve: async (obj, args) => await calcPreco(args),
    },
  }),
});
