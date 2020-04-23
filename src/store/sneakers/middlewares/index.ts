import { fetchMiddleware } from "./list";
import { sortMiddleware } from "./sortMiddleware";

export const sneakersMiddlewares = [fetchMiddleware, sortMiddleware];