web: concurrently "cd inevnet
web: concurrently -n services,gateway "yarn start-services" "wait-on http://localhost:4001/graphql && yarn start-gateway"