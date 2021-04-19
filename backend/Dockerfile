# image cơ sở, node với mini linux 
FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN yarn --silent
COPY . /app
RUN yarn add global json-server
EXPOSE 3000
CMD ["npm", "start"]
