
FROM node:14.1-alpine as nodebuild

WORKDIR /app

COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn config delete proxy
Run npm config rm proxy

RUN npm config rm https-proxy


RUN npm install
RUN npm rebuild node-sass

RUN npm run build


FROM nginx:alpine

COPY --from=nodebuild /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 8000
# start nginx 
CMD ["nginx", "-g", "daemon off;"]
