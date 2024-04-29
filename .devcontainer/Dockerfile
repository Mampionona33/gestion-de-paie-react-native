FROM ubuntu:22.04

# Installer htop, nodejs et snapd
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends htop nodejs snapd git wget curl yarn

# install node
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION v18.20.2
RUN mkdir -p /usr/local/nvm && apt-get update && echo "y" | apt-get install curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
RUN /bin/bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use --delete-prefix $NODE_VERSION"
ENV NODE_PATH $NVM_DIR/versions/node/$NODE_VERSION/bin
ENV PATH $NODE_PATH:$PATH

# Install OpenJDK-8
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean;

# Fix certificate issues
RUN apt-get update && \
    apt-get install ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f;

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME


# Copier le dossier "app" dans le conteneur
COPY . .

# Install eas-cli using yarn
RUN  npm i -g ts-node  && npm install -g typescript@latest && npm install -g eas-cli

# Copier le dossier "app" dans le conteneur
# COPY app /app

# Définir le répertoire de travail comme étant /app
WORKDIR /app

# setup env 
ENV REACT_APP_API_BASE_URL=https://la-ligne-scandinave-api.vercel.app
