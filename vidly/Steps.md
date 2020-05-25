docker run -d -p 27017-27019:27017-27019 -v /home/chakraborty/web/tmp/mongodata:/data/db --name mongodb mongo

docker exec -it mongodb bash

show dbs
