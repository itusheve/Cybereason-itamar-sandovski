# CybeReason Assignment
Micro front end project

This app contains one MAIN app and 4 subapplications.

## Installation steps:
- On the main app run 
```bash 
npm install
```
- Go on each app folders and run 
```bash 
npm install
``` 


- After all the sub applications are installed , go to each folder and run : 
    ```bash 
    npm run build
    npm run preview
    ``` 
    - each app will run on a separate port (5001-5004, for example , app1 will run on port 5001, app2 on port 5002...)

- Then go to the main folder  and run the app by :
```bash 
npm start
``` 

## Versioning

Each SubApplication has a versioning proccess , for building a new version you can change the version by the "version" property in their package.json.

If you want to change the version or to backward compability to another version , you can change the version in the index.html here : 
```bash 
const config = [
            { id: "grid", version:'1.0.0', url_js: "http://localhost:5001/assets/index.js",url_css:"http://localhost:5001/assets/index.css" },
            { id: "text", version:'1.0.0', url_js: "http://localhost:5002/assets/index.js",url_css:"http://localhost:5002/assets/index.css" },
            { id: "image", version:'1.0.0', url_js: "http://localhost:5003/assets/index.js",url_css:"http://localhost:5003/assets/index.css" },
            { id: "list", version:'1.0.0', url_js: "http://localhost:5004/assets/index.js",url_css:"http://localhost:5004/assets/index.css"}
        ];

``` 
in the version property.
