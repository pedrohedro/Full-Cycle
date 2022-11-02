FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=true 
ENV ASPNETCORE_URLS=http://+:80;http://+:443

ENV http_proxy http://proxysvs.bancobmg.com.br:8080
ENV https_proxy http://proxysvs.bancobmg.com.br:8080
ENV no_proxy localhost,172.28.61.206, 172.28.61.70, 172.28.216.198, .bancobmg.com.br,slap2261
RUN apt-get update
# RUN apt-get install curl
# RUN apt-get install openssl

WORKDIR /usr/local/share/ca-certificates
# RUN curl -ks 'http://pki/CertEnroll/SWAP1357.bancobmg.com.br_Grupo%20BMG%20CA.crt'-o '/tmp/Root_CA_BMG.crt'
# RUN openssl x509 -in '/tmp/Root_CA_BMG.crt'-inform der -text | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > '/etc/ssl/certs/RootCABMG.pem'&& /usr/sbin/update-ca-certificates
# RUN rm '/tmp/Root_CA_BMG.crt'

# FROM base AS final
# WORKDIR /app
# COPY . ./
# ENTRYPOINT [ "dotnet", "BMG.Digital.Wallet.Api.dll" ]


#docker rm $(docker ps -a -q) -f apaga todas as imagens