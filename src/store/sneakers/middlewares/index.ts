import { fetchMiddleware } from "./fetch";
import { sortMiddleware } from "./sortMiddleware";

export const sneakersMiddlewares = [fetchMiddleware, sortMiddleware];