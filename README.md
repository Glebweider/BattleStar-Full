# BattleStar

<div align="center">
<a href="https://github.com/Glebweider/BattleStar-Full"><img src='./FrontEnd - Web - Next Ts/public/BattleStar.svg' width="40%" /></a>
</div>

<p align="center" >
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
  <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
  <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
  </a>
</p>

## Project technologies
<table><tr><td valign="top" width="33%">

### Frontend  
<div align="center">
<a href="https://www.typescriptlang.org" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>    
<a href="https://nextjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nextjs.png" alt="NextJS" height="50" /></a> 
<a href="https://www.electronjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/electron-original.svg" alt="Electron" height="50" /></a>  
<a href="https://redux.js.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux" height="50" /></a> 
<a href="https://sass-lang.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/sass-original.svg" alt="Sass" height="50" /></a>
<a href="https://mui.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mui.png" alt="Material UI" height="50" /></a>     
</div>

</td><td valign="top" width="33%">

### Backend  
<div align="center">  
<a href="https://www.typescriptlang.org" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a> 
<a href="https://nestjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nestjs.svg" alt="NestJS" height="50" /></a>  
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>  
<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>  
</div>

</td></tr></table>  

<br/> 

# Guide
## Installation FrontEnd

```bash
# transition to FrontEnd
$ cd '.\FrontEnd - Web - Next Ts\'

# install
$ npm install
```

## Running the app

```bash
# development
$ npm run dev

# start 
$ npm run start

# build applications
$ npm run build
```


## Installation BackEnd


```bash
# transition to BackEnd
$cd '.\BackEnd - Server - Nest Ts\'

# install
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start

# development
$ npm run start:dev

# production mode
$ npm run start:prod
```


# API Routers
## Applications Routes
  #### [Swagger Docs](https://swagger.io/)
  ``` 
  http://localhost:4000/api/docs
  ```
  #### [AdminJs](https://adminjs.co/)
  ``` 
  http://localhost:4000/admin
  ```
## Auth Routers
  #### Register Router
  ```
    Register EndPoint:
      request: { 
        url: "http://localhost:4000/api/auth/registartion",
        method: "POST",
        body: {
          "user_username": string
          "user_password": string
          "user_email": string
          "user_ip": string
          "user_country": string
        }
      },
      response: {
        "successfull": boolean,
        "message": string,
        "jwt-token": string 
      }
  ```
  ### Login Router
  ```
    Login EndPoint:
      request: { 
        url: "http://localhost:4000/api/auth/login",
        method: "POST",
        body: {
          "user_password": string
          "user_email": string
          "user_ip": string
        }
      },
      response: {
        "successfull": boolean,
        "message": string,
        "jwt-token": string 
      }
  ```
  ### Jwt Router
  [UserSchema](#UserSchema)
  ```
    Jwt EndPoint: 
      request: {
        url: "http://localhost:4000/api/auth/jwt",
        method: "GET",
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      },
      response: {UserChema}
  ```

  ## Users Routers

  ### Users Router
  [UserSchema](#UserSchema)
  ```
    Users EndPoint:
      request: { 
        url: "http://localhost:4000/api/users/",
        method: "GET"
      },
      response: {
        [UserSchema]
      }
  ```

  ### User Router
  [UserSchema](#UserSchema)
  ```
    User EndPoint:
      request: { 
        url: "http://localhost:4000/api/users/:uuid (1234567890123)",
        method: "GET",
      },
      response: {UserSchema} 
  ```

  ### User Router Avatar
  ```
    Avatar EndPoint:
      request: { 
        url: "http://localhost:4000/api/users/avatar/:uuid/:avatar",
        method: "GET",
      },
      response: file(Avatar.png | jpg | svg | webm)
  ```

  ### User Router Avatar upload
  ```
    Avatar upload EndPoint:
      request: { 
        url: "http://localhost:4000/api/users/avatar/upload",
        method: "POST",
        body: formData
      },
      response: {
        "url": string('http://localhost:4000/Uploads/avatars/{uuid}/{file.name}')
      }
  ```

  # Schemas

  ### UserSchema DB
  <div id="UserSchema">

    username: string,
    mail: string,
    uuid: number,
    avatar: string,
    bio: string,
    country: string
    datareg: string
    UserData: {
      GameData: {
        Avg: number
        Tournaments: number
        Matchs: number
        MapsPlay: number
        Win: number
        Loser: number
        Kills: number
        Deads: number
        Accuracy: number
        Hours: number
        HistoryMatchs: []
      },
      CardInfo: {
        CardID: number
        Subcribe: string
        RefUrl: string
        RefUser: number
        money: number
        Transactions: []
      },
      FriendsData: {
        Friends: [],
        FriendsToAccept: [],
        BlackList: []
      },
      Binding: {}
    }
  </div>

