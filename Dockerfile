FROM node:8

# Create app directory
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
