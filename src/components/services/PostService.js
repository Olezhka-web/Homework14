export class PostService{
    url = 'http://jsonplaceholder.typicode.com/posts';
    async getAllPosts(){
        return await fetch(this.url)
        .then(value => value.json())
    }
}