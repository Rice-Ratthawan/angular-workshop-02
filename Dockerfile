FROM node:12.18.2-stretch
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4000
CMD ["npm","start"]
