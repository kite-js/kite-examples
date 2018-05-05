# KiteJS examples
Kite framework examples, there are some examples listed below, you can clone this repository and start example application server in these steps:

1. Clone the repository to your disk:

```sh
git clone https://github.com/kite-js/kite-examples.git
cd kite-examples
```

2. Install dependencies:

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

* __mix param API__: required and optional parameters demonstration  | [SOURCE](./src/controllers/mix_param.controller.ts)
  + All parameters omitted: [LINK](http://localhost:4000/mix_param)
  | expected output:
  ```json
    {
        "error": {
            "code": 1020,
            "msg": "Parameter error: \"name\" is required"
        }
    }
  ```
  + Only required parameter: [LINK](http://localhost:4000/mix_param?name=Kite)
    | expected output:
  ```json
    {
        "name": "Kite"
    }
  ```
  + All parameters present ( "age" parameter convert from string to number): [LINK](http://localhost:4000/mix_param?name=Kite&age=30)
  ```json
  {
	"name": "Kite",
	"age": 30
  }
  ```

* __ends a controller__: how to ends a controller when meets a condition | [SOURCE](./src/controllers/error.controller.ts)
 + Normal: [LINK](http://localhost:4000/error?msg=Hello)
 | expected output:
 ```json
    {
        "msg": "Hello"
    }
 ```

 + Error: [LINK](http://localhost:4000/error)
 | expected output:
 ```json
    {
        "error": {
            "code": "empty message"
        }
    }
 ```

 * __ends a controller (2)__: another example of ending a controller | [SOURCE](./src/controllers/error2.controller.ts)
 + Error message of empty: [LINK](http://localhost:4000/error2)
 | expected output:
 ```json
    {
        "error": {
            "code": "empty message"
        }
    }
 ```

 + Error message of non-empty, with string substitutions, REQUIRE `Kite ver 0.5.4+`: [LINK](http://localhost:4000/error2?msg=Hello)
 | expected output:
 ```json
    {
        "error": {
            "code": "custom error",
            "msg": "Message: Hello, time: Sat May 05 2018 23:27:33 GMT+0800 (CST)"
        }
    }
 ```

# TO BE CONTINUED