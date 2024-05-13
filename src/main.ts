import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({ secret: 'secret', saveUninitialized: false, resave: false, cookie: { maxAge: 60000 } }))

  app.use(passport.initialize())

  app.use(passport.session())
  
  await app.listen(process.env.PORT || 3002);

}
bootstrap();