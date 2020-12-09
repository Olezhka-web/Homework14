export class UserService{
    url ='http://jsonplaceholder.typicode.com/users';

    async getAllUsers(){
        return await fetch(this.url)
            .then(value => value.json())
    }
}