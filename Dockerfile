FROM node:18-alpine as builder

WORKDIR /usr/src/

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build
###

FROM node:18-alpine

WORKDIR /usr/src/app     

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=builder /usr/src/dist dist
COPY --from=builder /usr/src/package*.json ./
COPY --from=builder /usr/src/yarn.lock ./
COPY --from=builder /usr/src/tsconfig.json ./

RUN yarn install --production
RUN yarn add --dev tsconfig-paths

ENV NODE_OPTIONS=--max-old-space-size=1024


CMD yarn start:prod
