FROM node:16.0.0

#USER jenkins

RUN mkdir /forms
RUN mkdir /forms/node_modules
RUN mkdir /forms/.angular
WORKDIR /forms

RUN npm install -g @angular/cli@12.0.5

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4200

#CMD ["ng", "serve",  "--ssl", "true", "--disable-host-check", "true", "--port", "4200", "--host", "0.0.0.0"]
CMD ["ng", "serve", "--disable-host-check", "true", "--port", "4200", "--host", "0.0.0.0"]
