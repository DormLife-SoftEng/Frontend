# pull official base image
FROM node:14.12.0-alpine3.12 as development

ENV NODE_ENV=development

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm run build
# RUN npm install react-scripts@3.4.3 -g --silent

# add app
COPY . .

# start app
CMD ["npm", "start"]

FROM node:14-alpine3.11 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/package*.json ./

RUN npm install --only=production

# Copy only compiled source code.
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
