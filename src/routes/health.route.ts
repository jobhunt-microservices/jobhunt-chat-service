import { healthController } from '@chat/controllers/health.controller';
import express, { Router } from 'express';

class HealthRoutes {
  router: Router;
  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/chat-health', healthController.health);
    return this.router;
  }
}

export const healthRoutes = new HealthRoutes();
