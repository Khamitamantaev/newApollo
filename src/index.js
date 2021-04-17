const { ApolloServer } = require('apollo-server')


const typeDefs = `
    type Query {
      info: String!
      users: [User!]!
    }

    type User {
      id: ID!
      name: String!
      profession: String!
      vacant: Boolean!
    }
`
let users = [
  { id: 1, name: "Khamit", profession: "Developer", vacant: true},
  { id: 2, name: "Azamat", profession: "DeveloperApp", vacant: false},
]

const resolvers = {
  Query: {
    info: () => `This is ApolloServer`,
    users: () => users,
  },

  User: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    profession: (parent) => parent.profession,
    vacant: (parent) => parent.vacant,
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server is running on ${url}`))