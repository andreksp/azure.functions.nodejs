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

# Login
az login 
az account set --subscription "Assinatura do Azure 1"

# Create Resource Group
az group create --name azurefunctionsnodejsrg --location brazilsouth


# Global ACR Name
$ACR_NAME='azurefunctionsnodejs'  

# Create ACR

az acr create --resource-group azurefunctionsnodejsrg --name $ACR_NAME --sku Standard