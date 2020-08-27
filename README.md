# nuxpresso-server (alpha 0.0.1)

## Demo (frontend using nuxpresso-nuxt)

https://nuxpresso.netlify.app

## Roadmap

We suggest the following roadmap in order to successfully run a complete installation of Nuxpresso (Server and Frontend).

- install locally
- run a test with some content locally
- deploy server for production. We suggest to develop the content on the deployed server so you will not need to transfer data locally to the production database
- create your contents, theme, template and widget following your website design
- run nuxpresso-nuxt or develop your frontend locally
- after testing locally your frontend deploy it for production in a stage domain (stage.mydomain.com)
- switch your domain to the frontend deployed above


## Install locally (Development Mode)

In development mode you will install nuxpresso-server and nuxpresso-nuxt on your local machine, in order to check that everything works correctly.

## Install nuxpresso-server

**Requirements**

- a postgres DB running
- a cloudinary account in order to manage your media
- a mailgun account to send mail (you can use another mail provider but you need to change the plugins configuration)

**Notes**

*DATABASE *: You can switch to another database type like mySQL / MongoDB / SQLite. In order to change database type you need to change the file ./config/database.js.

*MEDIA *: You can change you media provider with one of your choice but you need to update the following file: ./config/plugins.js

*MAIL *: You can change your email provider with one of your choice but you need to update the following gile: ./config/plugins.js

***For all the above settings please read the official Strapi documentation***

**Clone repository**

```
git clone https://github.com/swina/nuxpresso-server-test
```

Go to installation directory and run install

```
cd nuxpresso-server
yarn install
```


Create a .env file  and copy the content from .env.example changing with your own settings

```
HOST=0.0.0.0
PORT=1337
ADMIN_JWT_SECRET=__create_your_jwt_secret__
DATABASE_HOST=__database_host__
DATABASE_PORT=__database_port__
DATABASE_NAME=__database_name__
DATABASE_USERNAME=__database_username__
DATABASE_PASSWORD=__database_port__
DATABASE_SSL=false
CLOUDINARY_API_KEY=__cloudinary_api_key__
CLOUDINARY_API_SECRET=__cloudinary_api_secret__
CLOUDINARY_CLOUD_NAME=__cloudinary_name__
MAILGUN_API_KEY=__mailgun_apikey__
MAILGUN_DOMAIN=__mailgun_domain__
SITE_EMAIL=__site_email__
MAILGUN_FROM=__mailgun_from__
MAILGUN_REPLYTO=mailgun_replyto__
```

```
yarn build
```

Run nuxpresso

```
yarn develop
```

**Your nuxpresso-server should run at http://localhost:1337/admin**

### Create the admin account

Create your administrator account


### Create the development role and account

This is required if you plan to use nuxpresso-customizer (see nuxpresso-nuxt)

- Create a **Development** role
- Create a new user and assign the Development role
- Change the Permissions for the Development Role for all the Content types to:
  - **find, findone, create, update**

## Deploy nuxpresso-server

Depending on the provider you will use follow the official Strapi documentation about deployment.
We suggest to:
- create a github repository with your nuxpresso-server 
- clone your repository on the production server
- deploy it

### nuxpresso-nuxt

**nuxpresso-nuxt** is the nuxpresso frontend. Check the repo https://github.com/swina/nuxpresso-nuxtjs


## Contribute

I really appreciate any contribution or suggestion. Contribution are managed thru github.com

