import { config } from '@chat/config';
import { database } from '@chat/database';
import { redisConnect } from '@chat/redis/connection';
import { UsersServer } from '@chat/server';
import express, { Express } from 'express';

class Application {
  public initialize() {
    config.cloudinaryConfig();
    database.connection();

    const app: Express = express();
    const server = new UsersServer(app);

    server.start();

    redisConnect();
  }
}

const application = new Application();
application.initialize();
