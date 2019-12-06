FROM node:10
# create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm build

#bundle app source
COPY . .

EXPOSE 3001
CMD ["node","server/server.js"]