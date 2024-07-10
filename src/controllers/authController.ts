import { Controller, Route, Get, Tags } from "tsoa";

@Route("auth")
@Tags("Auth")
export class AuthController extends Controller {
	@Get("Auth")
	public async verify(): Promise<number> {
		return 100;
	}

	@Get("Auth5")
	public async AnotherFunction(): Promise<number[]> {
		const x: number = 5;
		let list = [];
		for (let i = 0; i < x; i++) {
			list.push(i);
		}
		return list;
	}
}
