# azure.functions.nodejs
Test azure functions on azure using Node.js

# Build Docker Image
docker build -t azurefunctionsnodejs .
docker run -p 3000:80 -d azurefunctionsnodejs - primeiro a porta de dentor do container.
curl http://localhost:80
docker images - list images
docker ps - show processes
docker logs 7815c681d09c - container logs
docker exec -it 7815c681d09c /bin/bash - open container
docker kill 7815c681d09c - kill running container 
docker image rm <image> - to delete container
docker compose config - validate config
docker-compose up -d

# Login
az login 
az account set --subscription "Assinatura do Azure 1"

# Create Resource Group
az group create --name azurefunctionsnodejsrg --location brazilsouth


# Global ACR  ( Store Container)
$ACR_NAME='azurefunctionsnodejs'  

# Create ACR

az acr create --resource-group azurefunctionsnodejsrg --name $ACR_NAME --sku Standard

az acr login --name  $ACR_NAME

$ACR_LOGINSERVER=$(az acr show --name $ACR_NAME --query loginServer --output tsv)
echo $ACR_LOGINSERVER

docker tag webappimage $ACR_LOGINSERVER/azurefunctionsnodejs
docker image ls $ACR_LOGINSERVER/azurefunctionsnodejs
docker image ls

# Push docker
docker push $ACR_LOGINSERVER/azurefunctionsnodejs

az acr repository list --name $ACR_NAME --output table
az acr repository show-tags --name $ACR_NAME --repository azurefunctionsnodejs --output table

az acr build --image "azurefunctionsnodejs-acr-task" --registry $ACR_NAME .

az acr repository show_tags --name $ACR_NAME --repository azurefunctionsnodejs --output table