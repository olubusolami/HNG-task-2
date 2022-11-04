# 
# Project Title

A Rest API for Aritmetic Operation. 


## API Reference

#### POST Request

```http
  POST https://hngtask--2.herokuapp.com/hng-task2
```

| Parameter         | Type     | Description                                                                        |
| :--------         | :------- | :----------------------------------------------------------------------------------|
| `x`               | `string` | **Required**. x can be a number and Integer datatype                               |
| `y`               | `string` | **Required**. y can be a number and Integer datatype                               |
| `operation_type`  |  `string`| **Required**. Operation_type can either be addition, subtraction or mutiplication  |

#### add(x, y)

Takes value of x and y and returns the sum.

#### substract (x, y)

Takes value of x and y and substract the two value

#### multiply (x, y)

Takes value of x and y and multiply the two value
## Deployment

To deploy this project run

```bash
  npm run dev
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/olubusolami/HNG-task-2
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Support

For support, email devolubusola@gmail.com.

