## Follow Following step to use tailwindcss

step 1: Run the following Command
```
npm install -D tailwindcss
npx tailwindcss init

```
step 2: Configure your template paths:-tailwind.config.js file.

```
  content: ["*.html"]
```

step 3: Add the Tailwind directives to your CSS:-src/input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

step 4: Do following step

-->ninjs techique go to json then in script write function build:and paste this code 
// npm run build
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

step 5: Start using Tailwind in your HTML

```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
