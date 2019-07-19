# Auth

## Listener

### 상담 요청자의 로그인

### POST : /Listen/signin

> Require

```
id - string
pw - string
```

> Response: Success

``` 
status - 200
data = {
  message - "Login success!"
  token - string
}
```

> Response: Fail

```
status - 401
message - "Login failed"
```

### 상담 요청자의 회원가입

#### POST: /Listen/signup

> Require

```
name - string
phone - string
id - string
pw - string
age - number
sex - string
location - string
```

>  Response: Success

```
status - 200
data = {
	status - 200
	message - "Signup success!"
	token - string
}
```

> Response: Fail

```da
status - 400
message - "Signup fail!"
```



## Talker

### 상담자의 로그인

#### POST: /talker/signin

> Require

```
id - string
pw - string
```

> Response: Success

```
status - 200
data = {
  status - 200
  message - "Login success!"
  token - string
}
```

> Response: Fail

```
status - 401
message - "Login failed"
```

### 상담자의 회원가입

#### POST: /talker/signup

> Require

```
name - string
phone - string
id - string
pw - string
age - number
sex - string
field - string
area - string
```

> Response: Success

```
status - 200
data = {
	status - 200
	message - "Signup success!"
	token - string
}
```

> Response: Fail

```
status - 401
message - "Login failed"
```

