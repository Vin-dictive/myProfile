FROM nginx:1.17.2-alpine
COPY build /usr/share/nginx/html 
# Since build forlder contains all the production build
# we will copy build files to docker image
# U dont really require docker containers for this 
# but made this to learn docker
# Also in package.json change homepage to ./ to allow it
# to run thru nginx. 8080 -> 80
# https://hub.docker.com/repository/docker/vindictive/profile-page
# docker build -t [image_name] .