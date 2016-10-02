import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Preco',
  description: 'Represents an address',
  fields: {
    Codigo: {
      type: GraphQLInt,
      resolve: obj => obj.Codigo,
    },
    Valor: {
      type: GraphQLInt,
      resolve: obj => obj.Valor,
    },
    ValorMaoPropria: {
      type: GraphQLInt,
      resolve: obj => obj.ValorMaoPropria,
    },
    ValorAvisoRecebimento: {
      type: GraphQLInt,
      resolve: obj => obj.ValorAvisoRecebimento,
    },
    ValorSemAdicionais: {
      type: GraphQLInt,
      resolve: obj => obj.ValorSemAdicionais,
    },
    error: {
      type: GraphQLString,
      resolve: obj => obj.error,
    },
  },
});
