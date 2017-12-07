# Jepretgram - Hary NP

Demo app with basic REST API

# REST API

List of basic routes :

| Route | HTTP | Description |
| ------ | ------ | ------ |
| `${/api/hello?name={name}` | GET | Print hello, {name} !

List of user routes :

| Route | HTTP | Description |
| ------ | ------ | ------ |
| `${/users}` | GET | Get all the users
| `${/users/:id}` | GET | Get single user
| `${/users/login}` | POST | Login
| `${/users/register}` | POST | Register
| `${/users/delete}` | DELETE | Delete Users

| Route | HTTP | Description |
| ------ | ------ | ------ |
| `${/jeprets}` | GET | Get all the jeprets
| `${/jeprets/:id}` | GET | Get single jeprets
| `${/jeprets/}` | POST | Post jeprets
| `${/jeprets/:id}` | DELETE | Delete jeprets
| `${/jeprets/:id}` | PUT | Edit jeprets

# Usage
With only npm :
```sh
npm install
npm start
npm run dev
```

Access the website via `${http://localhost:3000}` or API via
`${http://localhost:3000/api}`.
