# Udacity nano dgree Image API

   1. install npm packages dependencies
      ```bash
      npm i
      ```

   2. For reference, proposed set of packages with their versions are package.json file as well as in *Dependencies* section

2. To build and run server
    ```bash
        npm run start
    ```
    
3. test the endpoints
   1. http://localhost:3000/status [GET]

   2. http://localhost:3000/api/images [GET] (query parameters: filename, width, height)

   3. try this URL: http://HostURL:3000/api/images?filename=fjord&width=500&height=500

* after the build run this command to do Unit testing 
    ```bash
    npm run test
    ```
