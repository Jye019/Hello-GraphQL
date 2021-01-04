import { ApolloServer, gql } from 'apollo-server';

// schema
const typeDefs = gql`
    type Book {
        title: String
        author: Author
    }

    type Author {
        name: String,
        book: [Book]
    }

    type Query {
        books: [Book]
        authors: [Author]
    }
`;

// data set
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin'
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster'
    },
];

const authors = [
    {
        name: 'Kate Chopin',
    },
    {
        name: 'Paul Auster',
    },
];

// resolver => apollo server가 어떤 타입의 데이터를 fetch 해야되는지 정의 
const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});