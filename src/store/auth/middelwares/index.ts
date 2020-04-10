import { fetchMiddlewares } from "./fetch";
import { signInValidationErrorsMiddleware } from "./signInValidationErrors";

export const authMiddlewares = [...fetchMiddlewares, signInValidationErrorsMiddleware];