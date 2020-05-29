import {
  makeExecutableSchema,
  mergeSchemas,
} from 'graphql-tools'
import GraphQLUUID from 'graphql-type-uuid'
import GraphQLJSON from 'graphql-type-json'

const typeResolvers = {
  UUID: GraphQLUUID,
  JSON: GraphQLJSON,
}
const countrySchema = makeExecutableSchema({
  typeDefs:`
    scalar UUID
    type Country {
      id: UUID!
      name: String
    }
    type Query {
      country: Country
    }
  `,
  resolvers: {
    UUID: GraphQLUUID,
  }
})


const citySchema = makeExecutableSchema({
  typeDefs:`
    scalar UUID
    scalar JSON
    type City {
      id: UUID!
      name: String
      coordinates: JSON
    }
    type Query {
      city: City
    }
  `,
  resolvers: {
    UUID: GraphQLUUID,
    JSON: GraphQLJSON,
  }
})


const expenseItemSchema = makeExecutableSchema({
  typeDefs: `
    scalar UUID
    type ExpenseItem {
      id: UUID
      name: String

    }
  `
})

const expensePriceSchema = makeExecutableSchema({
  typeDefs: `
    scalar UUID
    type ExpensePrice {
      id: UUID
      price: Float
    }
  `
})



// add all the relationship stuff
const linkTypeDefs = `
  extend type City {
    country: Country
  }
  extend type ExpenseItem {
    city: City
  }
  extend type ExpensePrice {
    city: City
    expenseItem: ExpenseItem
  }
`

const resolvers = {
  Query: {
    country: () => ({ id: '2ij29fij390f3j', name: 'Toronto'}),
    city: () => ({id: '2ij29fij390f3j11', name: 'Toronto', coordinates: "[]"})
  }
}

export const schema = mergeSchemas({
  schemas: [
     countrySchema,
     citySchema,
     expenseItemSchema,
     expensePriceSchema
  ],
  resolvers: resolvers,
  typeDefs: linkTypeDefs,
  resolvers,
});