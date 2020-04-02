import { fetchMiddleware } from "./fetch";
import { signInValidationErrorsMiddleware } from "./signInValidationErrors";

export const authMiddlewares = [fetchMiddleware, signInValidationErrorsMiddleware];