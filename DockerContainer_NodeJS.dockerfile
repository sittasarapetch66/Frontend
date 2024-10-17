FROM node:18

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY Frontend/package*.json ./

RUN npm install --production

COPY Frontend/. .
 
EXPOSE 3000

CMD ["node", "server.js"]

#Commands for build image and run node.js container from image
#docker build -f DockerContainer_NodeJS.dockerfile -t node-js-image . 
#docker run -d --name node-server --network mynetwork  -p 3000:3000 node-js-image