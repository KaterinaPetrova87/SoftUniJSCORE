let auth = (() => {
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(userData) {
        sessionStorage.setItem('authtoken', userData['_kmd']['authtoken']);
        sessionStorage.setItem('username', userData['username']);
        sessionStorage.setItem('userId', userData['_id']);
    }

    function register(username, password) {
        let obj = {username, password};
        return remote.post('user', '', 'basic', obj);
    }

    function login(username, password) {
        let obj = {username, password};
        return remote.post('user', 'login', 'basic', obj);
    }

    function logout() {
        remote.post('user', '_logout', 'kinvey')
            .then(function () {
                sessionStorage.clear();
            }).catch(console.error);
    }

    return {
        login,
        logout,
        register,
        isAuth,
        saveSession
    }
})();