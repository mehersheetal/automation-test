FROM node:12

WORKDIR /usr/app

RUN apt-get update && apt-get install -y openjdk-8-jdk
ADD ./scripts/wait-for-it.sh ./
RUN chmod 755 wait-for-it.sh
ADD ./scripts/run.sh ./
RUN chmod 755 run.sh

ADD ./package.json package.json
ADD ./package-lock.json package-lock.json

RUN npm ci
ADD ./.env ./
ADD ./tsconfig.json ./
ADD ./wdio.conf.js ./
ADD ./cucumber.report.conf.js ./
ADD ./config config
ADD ./src src

CMD [ "./run.sh"]
