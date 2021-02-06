
# Step 1
FROM node:10-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
RUN npm run build
 
# Step 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html