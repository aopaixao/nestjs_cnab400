FROM node:14.17.5

WORKDIR /opt/docker_files/nestjs-cnab400

RUN /bin/sh -c "apt-get install bash"

COPY package*.json ./
RUN npm install -g npm && npm install
RUN npm i -g @nestjs/cli
RUN npm i --save @banco-br/nodejs-cnab

COPY . .

EXPOSE 3000

CMD ["npm", "start"]