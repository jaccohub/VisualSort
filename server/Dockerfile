FROM node:12.18-alpine

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm ci && rm -f ~/.npmrc
RUN mkdir -p /opt/lodenius/app && cp -a /tmp/node_modules /opt/lodenius/app/

WORKDIR /opt/lodenius/app
ADD . /opt/lodenius/app

CMD [ "node", "./bin/www" ]
