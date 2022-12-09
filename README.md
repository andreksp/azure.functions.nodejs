# azure.functions.nodejs
Test azure functions on azure using Node.js

# Build Docker Image
docker build -t azurefunctionsnodejs .
docker run -p 80:3000 -d azurefunctionsnodejs
curl http://localhost:80
docker images
docker ps
docker logs 7815c681d09c
docker exec -it 7815c681d09c /bin/bash
docker kill 7815c681d09c