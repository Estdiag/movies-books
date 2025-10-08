import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/typeDefs';
import { resolversMovies } from './schema/resolversMovies';
import { ENV } from './config/env';

const server = new ApolloServer({ typeDefs, resolvers: resolversMovies });

server.listen({ port: ENV.PORT }).then(({ url }) => {
  console.log(`🚀 Servidor GraphQL listo en ${url}`);
});

// sequelize.authenticate()
//   .then(() => console.log("✅ Conexión a MySQL exitosa"))
//   .catch((err) => console.error("❌ Error de conexión:", err));

