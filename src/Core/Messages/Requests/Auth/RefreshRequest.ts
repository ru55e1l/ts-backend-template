/*
------------------------------------------------------------------------
DESCRIPTION

Request to refresh a JWT token
------------------------------------------------------------------------*/
export interface RefreshRequest {
	Token: string;
	RefreshToken: string;
}
