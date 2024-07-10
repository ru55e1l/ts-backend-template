/*
------------------------------------------------------------------------
DESCRIPTION

Login request interface
------------------------------------------------------------------------*/

export interface LoginRequest {
	// Both of these are encrypted
	Username: string;
	Password: string;
}
