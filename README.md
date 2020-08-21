# Nuxpresso Server: a Strapi custom application

## Get Started

**Requirements**

- a postgres DB running
- a cloudinary account in order to manage your media
- a mailgun account to send mail (you can use another mail provider but you need to change the plugins configuration)

**Notes**

*DATABASE* : You can switch to another database type like mySQL / MongoDB / SQLite. In order to change database type you need to change the 
file `./config/database.js`.

*MEDIA* : You can change you media provider with one of your choice but you need to update the following file: `./config/plugins.js`

*MAIL* : You can change your email provider with one of your choice but you need to update the following gile: `./config/plugins.js`

***For all the above settings please read the official Strapi documentation***


## Installation
Clone repository

`git clone https://github.com/swina/nuxpresso-server`

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

After build your strapi admin import the nuxpresso server configuration from ```./nuxpresso.json```

```
strapi config:restore -f nuxpresso.json
```

This update the admin GUI with custom field labels and view configurations

```
yarn develop
```

## Application setup

Connect to http://localhost:1337/admin

#### Create your account
- Create your admin account

#### Setup roles and permissions

- Go to Roles & Permissions
- Edit the Public role
- Set Permissions for Application to *find* and *findone* for 

    - Article
    - Category
    - Menus
    - Template
    - Theme
    - Widgets
    - Settings

- Set Permission for Email checking the *send* option

#### Create your general settings

From the main menu click

- Single Type - Settings

Fill with your data and save

#### Create a theme, a template and


