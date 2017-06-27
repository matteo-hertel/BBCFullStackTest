FROM node:8.0

MAINTAINER Matteo Hertel "info@matteohertel.com"

RUN mkdir -p /var/node

ADD ./code/package.json /var/node/package.json
ADD ./code/yarn.lock /var/node/yarn.lock

ADD ./code/ /var/node/

WORKDIR /var/node

RUN rm -rf node_modules

RUN yarn

# Define default command.
CMD ["yarn", "serve"]
