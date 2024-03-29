FROM nginx
# install node & npm
RUN apt-get update && apt-get install -y
RUN apt-get install -y apt-utils
RUN apt-get install -y curl
RUN apt-get install -y sudo
RUN apt-get install -y gnupg
RUN curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN apt-get install -y nodejs
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Copy project to container
COPY . /usr/src/app/
# Build project
RUN npm install
RUN npm rebuild node-sass
RUN npm run ng build -- --prod --aot --vendor-chunk=true
# Copy app's build
RUN cp -R ./dist/* /usr/share/nginx/html
# copy client nginx config
RUN rm /etc/nginx/conf.d/default.conf
COPY docker-nginx.conf /etc/nginx/conf.d
EXPOSE 4200
