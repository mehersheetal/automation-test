# Volvo Test

#### Starting application testing

1. Install **Node dependencies**:

```sh
npm install
```

2. Start **docker**

```sh
npm run docker-start
```

3. Running tests:

```sh
npm run docker-test
```

4. To stop docker containers:

```sh
npm run docker-stop
```
#### Report generation

1. Allure report is automatically generated to open the reports

```sh
npm run report:allure
```

2. Multiple cucumber json reporter will open automatically, but to open manually.

```sh
npm run report
```