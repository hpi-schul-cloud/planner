FROM node:8-alpine
ARG PORT=8000

COPY . /server
RUN cd server && yarn install --production

CMD cd server && yarn start