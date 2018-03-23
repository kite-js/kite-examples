# KiteJS examples
Kite framework examples, there are some examples listed below, you can clone this repository and start example application server in these steps:

1. Clone the repository to your disk:

```sh
git clone https://github.com/kite-js/kite-examples.git
cd kite-examples
```

2. Install dev dependencies:

```sh
npm install
```

3. Start example server:

```sh
npm start
```

# Example shortcuts

Once the example application server is started, this links become available (assuming the server is listening at `localhost:4000`):

* [greet API](http://localhost:4000): Hello world! example | [SOURCE](./src/controllers/greet.controller.ts)
| expected output:
    ```json
    {
        "msg": "Hello world!"
    }
    ```

* [welcome API](http://localhost:4000/welcome?name=Kite): Accepting input data (parameter) | [SOURCE](./src/controllers/welcome.controller.ts)
| expected output:
    ```json
    {
        "msg": "Hello, Kite!"
    }
    ```

* __param API__: required and optional parameters demonstration  | [SOURCE](./src/controllers/param.controller.ts)
  + All parameters omitted: [LINK](http://localhost:4000/param)
  | expected output:
  ```json
    {
        "error": {
            "code": 1020,
            "msg": "Parameter error: \"name\" is required"
        }
    }
  ```
  + Only required parameter: [LINK](http://localhost:4000/param?name=Kite)
    | expected output:
  ```json
    {
        "name": "Kite"
    }
  ```
  + All parameters present ( "age" parameter convert from string to number): [LINK](http://localhost:4000/param?name=Kite&age=30)
  ```json
  {
	"name": "Kite",
	"age": 30
  }
  ```

# TO BE CONTINUED