import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from '@adminjs/nestjs'
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './Auth/auth.module';
import { StatsModule } from './Stats/stats.module';
import * as AdminJSMongoose from '@adminjs/mongoose';
import AdminJS from 'adminjs';
import { UsersModule } from './users/users.module';

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}

@Module({
  imports: [ 
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    MongooseModule.forRoot(process.env.MONGO_URL), 
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [],
        },
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret'
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret'
        },
      }),
    }),
    AuthModule,  
    StatsModule, 
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
