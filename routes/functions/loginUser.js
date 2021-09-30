const loginUser = {
    passwordMatch: (password) => {
        if (password) {
            return JSON.stringify({ status: 'ok', message: "Password is matched !LOGIN!" })
        }
    },
    passwordNotMatched: (password) => {
        if (password) {
            return JSON.stringify({ status: 'error', error: "Password is incorrect" })
        }
    },
    usernameMatch: (username) => {
        if (username) {
            return JSON.stringify({ status: 'ok', message: "Username is matched !LOGIN!" })
        }
    },
    usernameNotMatch: (username) => {
        if (username){
            return JSON.stringify({ status: 'error', error: "Username is incorrect" })
        }
    }
}

module.exports=loginUser;