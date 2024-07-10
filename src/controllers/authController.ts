/*
------------------------------------------------------------------------
DESCRIPTION

Handles login, refresh, etc
------------------------------------------------------------------------*/

import { Route, Post, Tags, Put } from "tsoa";
import { LoginResponse } from "../Core/Messages/Responses/Auth/LoginResponse";
import { BaseController } from "./BaseController";
import { RefreshRequest } from "../Core/Messages/Requests/Auth/RefreshRequest";
import { LoginRequest } from "Core/Messages/Requests/Auth/LoginRequest";

@Route("Auth")
@Tags("Auth")
export class AuthController extends BaseController {
	@Post("Login")
	public async Login(request: LoginRequest): Promise<LoginResponse> {
		return this.InternalServerError({
			Success: false,
			RefreshToken: "Not Implemented",
		});
	}

	@Put("Refresh")
	public async Refresh(request: RefreshRequest): Promise<LoginResponse> {
		return this.InternalServerError({
			Success: false,
			RefreshToken: "Not Implemented",
		});
	}

	@Post("Register")
	public async Register(): Promise<LoginResponse> {
		return this.InternalServerError({
			Success: false,
			RefreshToken: "Not Implemented",
		});
	}
}
