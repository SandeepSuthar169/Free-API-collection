import "dotenv/config";
import cors from "cors";
import {env} from "./config/session"
import session from "express-session";
import cookieParser from "cookie-parser";
// import authRouter from "./routes/auth.route";
// import eventRoute  from "./routes/eventform.route"
import pool, { checkDatabaseConnection } from "./db/pool";
import express, { type Request, type Response } from "express";


