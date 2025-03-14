FROM node
COPY . ./app
WORKDIR /app
RUN npm ci
RUN npm run build
EXPOSE 2300
CMD [ "node", "." ]