import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { helloShared } from '@package/shared';
import { ENV } from './config/env';

const app = express();

app.get('/', (_req, res) => {
  res.send({ msg: helloShared(), env: process.env.API_URL });
});

app.listen(ENV.PORT, () => console.log(`Listening ${ENV.PORT}`));
