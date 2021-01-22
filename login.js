const axios = require("axios");

// generate auth url - the callback uri will have the token in it
// const authURI =
//   "https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%2F&client_id=VEYBXXSWJEACNL9XWSHA7SZLYC0IW2G0%40AMER.OAUTHAP";

// // const authURI = 'https://api.tdameritrade.com/v1/oauth2/token'
// const params = {
// 		grant_type: "authorization_code",
// 		access_type: "offline",
// 		code: "",
// 		client_id: "VEYBXXSWJEACNL9XWSHA7SZLYC0IW2G0", // variable
// 		redirect_uri: "http://localhost/"
// }

// const response = await axios.post(authURI, params);

const access_token = "30106NmXTmR3Xf+E41JWkhfe7CoN5d3vV/RTbzepY5X+5ft74Mm1xeRrxIB4h4wXJDXAcS31siAMOwlu+c3Le1fZ7JGFgtISwz0/KfjbhRabUVXGX1w3k24oDchGctugvD4hijKBtW1+dtFIeNSRyeg3kma/9D958VDwAldkpvP7nvoUqH//HUkB9ELiIt48QxryQkqJlUourdLGw3VlkRet601D5k4BYjdrJLJ+XMDtepwLqjBbQ+cFP8Xw7G4riYnSMTNp4fmtB1rcUA7gjN3DJE/bkwk2TsNFSOpwlTb5uIPCtoKDT+CjK10l3oYdYo4GrT/4eUM9z+l/R98PywAWQW7A1uHiPJYWDwK5zYGVKjoqo+63jbXC0hLSyDzrmuG3TbkJjH7szMFnVoQMbPJ/S58AXiXmtu4gVm0xi+Vbucro9ST+f+j07I3LsB1hA088D3HWsMP0Ye+rXVKYWIJBjxoQcBb4y+Z3u8qhWyEzK78PU/u1d7IMXn9uKICUeGhUnFRSUETW4DDO74pRSdzH/0eM+McX9YSi5100MQuG4LYrgoVi/JHHvlqPsXK+msGQuG0O4ZNJYZfT0K/vAmQ3y2Zn4A74WI54yVp/1R3yz02FEyaxVkxoSZ++euoFv0lB3SDh3hMEW9GdAK4HwVzLDK7EBlvQzWIhgdlJ7Sa17x735IavaSOlpF+fzH2+Ag/9Y5WtIdiwnMJX/gGnQKo2OJqiPYAC8qN1YN9EiigePi4CIq91+GBDCg6clGKphNp9fgVONndMxG6yQJaicII9iWzTCUjTp4TPZD9jMQpsmtBPGISafJU2cQ9uxYaH6hBXK7HYa3QfLI+c9j/6Ey92xzw/NpfV5R01a3TygvXnkV0TIcbk7QGdsEOXFl9arap121co91Cv49Kyqt3iiohqK8z7G6XpZSGgkdpMAAMuQ7oi4x9Hl9ALfX6Lj0tu+KRrnqzGqQ9uqZVKAz38hkz0x/CWFtwDXp8QaKSoZglKpCkCaDTWNVbqu46YWuflATrVsD9Uh4Qx7fOTJ/CvAF6MCj8jVsPWTeD+cbVuTW6QtvtszgloJ4NEsUw3xyhPfub+BsuD29GPz7yidnkAvz3Fq7r7/Onf212FD3x19z9sWBHDJACbC00B75E";

const userPrincipals = await axios.get(
    "https://api.tdameritrade.com/v1/userprincipals?fields=streamerSubscriptionKeys%2CstreamerConnectionInfo",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
	)};


	setTimeout(() => {
		console.log(userPrincipals)
	}, 3000);
	
	const test = "hello from login";
	export default {
		test
	}
