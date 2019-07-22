# MicroSense&trade; - challenge

Simple UI for displaying devices and their "health". Allows choosing an available reader and job operation. 
Send a POST request to the backend for start a job. 

## Objectives
MicroSense&trade; exposes a list of readers in the system, the health issues in the system, the types of operations your readers can work on, and an endpoint to instruct your readers to begin performing work. Build a front-end application that consumes MicroSense&trade; to accomplish the following:
- Display a list of readers in the system.
- Display the health status of each reader alongside that reader.
- Allow the user to select a set of readers, select an operation from those available, and press a "Start Job" button to run a job.
- If a reader has a health status of `ERROR`, do not allow the user to start a job with it.
- If a reader has a health status of `WARNING`, allow the user to start the job, but display a warning message bellow the job start button.
- See the readme of MicroSense&trade; for documentation on how to retrieve readers, health status, operations, and how to start a job.

## Used technologies

- UI - React/Redux
- HTTP server - Nginx
- Containerizing - Docker
- CI - Travis CI

## Usage

Clone this repo:
```
git clone https://github.com/DudkinON/microsense 
```
go to the project folder:
```
cd microsense
```


### With Docker 
> You have to install Docker: 
- [Mac OS](https://docs.docker.com/docker-for-mac/install/)
- [Windows](https://docs.docker.com/docker-for-windows/install/)

And Docker compose:
- [Select your OS](https://docs.docker.com/compose/install/)
In the project directory run following command:
```
docker-compose up
```
Then UI will available on:
http://localhost:8080

### With npm

#### Step 1
Install Node.js
- [download](https://nodejs.org/en/download/)

#### Step 2
First, you need to change the server address.

Open file `./client/src/reducers/config.js`

Change line:
```
api: '/api',
```
to 
```
api: 'http://localhost:5000',
```

#### Step 3
Then, in the project directory run following commands:

```
cd server 

npm install

npm start

cd ../client

npm install

npm start
```
#### Step 4

Then UI will available on:
http://localhost:3000

##### With yarn 

#### Step 1
...
#### Step 2
...

#### Step 3

- [Install yarn](https://yarnpkg.com/lang/en/docs/install)

Then, in the project directory run following commands:

```
cd server 

npm install

npm start

cd ../client

npm install

npm start
```

#### Step 5
Then UI will available on:
http://localhost:3000


## LICENCE

This application sharing under MIT license, 
all used frameworks and libraries have thyself license type.