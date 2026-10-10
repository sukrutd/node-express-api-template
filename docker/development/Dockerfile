# Set the base image to official Node.js image v24
FROM node:24

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5501 for the application
EXPOSE 5501

# Set the command to run the application in development mode
CMD ["npm", "run", "dev"]