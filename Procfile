web: concurrently -n services,gateway \"yarn start-services\" \"wait-on http://localhost:4001/.well-known/apollo/server-health && yarn start-gateway\"