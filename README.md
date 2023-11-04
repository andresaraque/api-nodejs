# API nodejs with dummy endpoint

Example of API using nodejs and express with dummy endpoint https://dummyjson.com/docs/products

## Installation
1. If you do not have nodejs installed on your machine, please download it with the following link [Download Node.js and npm](https://nodejs.org/en/download). I used npm the default package manager for the node.js javaScript runtime.

2. In the terminal type the below command and press **Enter key**. The version we have installed of Node.js should appear (in my case v14.21.3)
    ```bash
    node -v
    ```
3. In the terminal type the below command and press **Enter key**. The version we have installed of npm should appear (in my case 6.14.18)
    ```bash
    npm -v
    ```

4. So, let's install it in the terminal type the following command and press **Enter key**.
    ```bash
    npm i
    ```
## Usage

1. Run and view the changes locally with the following command.
    ```bash
    npm run start:dev
    ```
2. go to http://localhost:3500/api/products if you didn't change the port in the .env file (_PORT=3500_)


## How to use
1. With a **group of products** (http://localhost:3500/api/products)

    ![get-all-products.png](./assets/all-products.png)

    - You can pass "limit" and "skip" params in the URL to limit and skip the results for pagination. (http://localhost:3500/api/products?limit=10&skip=20)

      ![get-products-params.png](./assets/get-products-params.png)

    - You can pass "select" as query params with comma-separated values to select specific data. (http://localhost:3500/api/products?limit=10&skip=20&select=images)

      ![get-products-params-full.png](./assets/get-products-params-full.png)

2. With a **single product**
    - You can pass any number between 1 and 100 the total. (http://localhost:3500/api/products/20)

      ![get-product.png](./assets/get-product.png)

    - You can pass a filter for example **_stock_**. (http://localhost:3500/api/products/20?select=stock)

      ![get-product-filter.png](./assets/get-product-filter.png)


### Dependencies

```JSON
{
  "axios": "^1.6.0",
  "cors": "^2.8.5",
  "express": "^4.18.2"
}
```

### Dev Dependencies
```JSON
{
    "dotenv": "^16.3.1",
    "nodemon": "^3.0.1"
}
```

## Author
Developed with all ❤️ by Andres Araque