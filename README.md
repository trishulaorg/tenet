# Tenet

Tenet is a meta-internet service.

## Technology Overview

Tenet is consisted of three servers: RDBMS, Next.js server, and Apollo server. Next.js handles HTTP requests, and all SSR things with React. Apollo is an API server, does GraphQL things; parsing queries, checking types, respond certain data to queries.

In each test environment, all servers above can be automatically set up and managed by **docker-compose**. For more detailed information, you can see `docker-compose.yml` and `Dockerfile`. Only things you have to do is cloning this repo and configuring environmental variables, and `sudo docker-compose up`.

## Development Steps

1. At first, you have to clone this repo and execute `npx husky install`
2. Execute `cp .env.example .env`
3. Confirm you have already installed docker and docker-compose. then `sudo docker-compose build`
4. `sudo docker-compose up` to make docker images work.
5. After testing, you have to do `sudo docker-compose down` to clean up the environment.

Note that `sudo` is not necessery if you have configured sudoers for docker.

During developping this software, you might repeat step 3 to 5. If there's a problem let me know. I've only tested on my Ubuntu environment.

## Authors

This software is written and maintained by @minamorl.

### Contributors

@mouroutai

## License

All rights reserved.