FROM node

COPY . /home/src

RUN cd /home/src; npm install

EXPOSE 3000

CMD ["node", "/home/src/index.js"]
