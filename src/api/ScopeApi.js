export default class ScopeApi {  
    static getAllScopes() {
        return fetch('/scope/list').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}