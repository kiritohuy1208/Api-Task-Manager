FROM alpine:latest
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY . .
RUN npm install 
EXPOSE 9005
ENTRYPOINT ["node"]
CMD [ "src/app.js" ]
#CMD ["node", "src/index.js"]