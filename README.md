# Blogging Platform API
Simple RESTful API with basic CRUD operations for a personal blogging platform

Sample for [Blogging Platform API](https://roadmap.sh/projects/blogging-platform-api) from [roadmap.sh](https://roadmap.sh/)

## usage:

Create .env file and add necessary data to connect to your database
In this case I used postgres instead of mySQL

inside project run:

```bash
# node index.js <username>
npm run dev
```

After that go to postman (or your tool of preference for testing endopints) and test the app on 127.0.0.1:3000/posts

For request body (for create and update) use raw JSON:

```json
{
    "title": "Blog post 0",
    "category": "Testing 0",
    "tags": null,
    "content": "Blog post test content 0"
}
```

To get or delete a single object target it with it's id in the route:

```yaml
# 1 refers to object (blog post) id
127.0.0.1:3000/posts/1
```
