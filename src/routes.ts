/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from "@tsoa/runtime";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthController } from "Controllers/authController";
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from "express";

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
	LoginResponse: {
		dataType: "refObject",
		properties: {
			Success: { dataType: "boolean", required: true },
			RefreshToken: { dataType: "string", required: true },
		},
		additionalProperties: false,
	},
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
	LoginRequest: {
		dataType: "refObject",
		properties: {
			Username: { dataType: "string", required: true },
			Password: { dataType: "string", required: true },
		},
		additionalProperties: false,
	},
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
	RefreshRequest: {
		dataType: "refObject",
		properties: {
			Token: { dataType: "string", required: true },
			RefreshToken: { dataType: "string", required: true },
		},
		additionalProperties: false,
	},
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {
	noImplicitAdditionalProperties: "throw-on-extras",
	bodyCoercion: true,
});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
	// ###########################################################################################################
	//  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
	//      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
	// ###########################################################################################################
	app.post(
		"/Auth/Login",
		...fetchMiddlewares<RequestHandler>(AuthController),
		...fetchMiddlewares<RequestHandler>(AuthController.prototype.Login),

		async function AuthController_Login(request: ExRequest, response: ExResponse, next: any) {
			const args: Record<string, TsoaRoute.ParameterSchema> = {
				request: { in: "body", name: "request", required: true, ref: "LoginRequest" },
			};

			// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

			let validatedArgs: any[] = [];
			try {
				validatedArgs = templateService.getValidatedArgs({ args, request, response });

				const controller = new AuthController();

				await templateService.apiHandler({
					methodName: "Login",
					controller,
					response,
					next,
					validatedArgs,
					successStatus: undefined,
				});
			} catch (err) {
				return next(err);
			}
		},
	);
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
	app.put(
		"/Auth/Refresh",
		...fetchMiddlewares<RequestHandler>(AuthController),
		...fetchMiddlewares<RequestHandler>(AuthController.prototype.Refresh),

		async function AuthController_Refresh(request: ExRequest, response: ExResponse, next: any) {
			const args: Record<string, TsoaRoute.ParameterSchema> = {
				request: { in: "body", name: "request", required: true, ref: "RefreshRequest" },
			};

			// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

			let validatedArgs: any[] = [];
			try {
				validatedArgs = templateService.getValidatedArgs({ args, request, response });

				const controller = new AuthController();

				await templateService.apiHandler({
					methodName: "Refresh",
					controller,
					response,
					next,
					validatedArgs,
					successStatus: undefined,
				});
			} catch (err) {
				return next(err);
			}
		},
	);
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
	app.post(
		"/Auth/Register",
		...fetchMiddlewares<RequestHandler>(AuthController),
		...fetchMiddlewares<RequestHandler>(AuthController.prototype.Register),

		async function AuthController_Register(request: ExRequest, response: ExResponse, next: any) {
			const args: Record<string, TsoaRoute.ParameterSchema> = {};

			// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

			let validatedArgs: any[] = [];
			try {
				validatedArgs = templateService.getValidatedArgs({ args, request, response });

				const controller = new AuthController();

				await templateService.apiHandler({
					methodName: "Register",
					controller,
					response,
					next,
					validatedArgs,
					successStatus: undefined,
				});
			} catch (err) {
				return next(err);
			}
		},
	);
	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

	// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
