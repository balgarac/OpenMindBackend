# Auth

## Listener

### 상담 요청자의 로그인

### POST : /Listen/signin

> require

```
data = {
	id - string
	pw - string
}
```

> response : success

``` 
data = {
  status - 200
  message - "Login success!"
  token - "string"
}
```

> response:fail

```
data = {
  status - 401
  message - "Login failed"
}
```

### 상담 요청자의 회원가입

#### POST: /Listen/signup

> require

```
data = {
	name - string
	phone - string
	id - string
	pw - string
	age - number
	sex - string
	location - string
}
```

>  response : success

```
data = {
	status - 200
	message - "Signup success!"
	token - "string"
}
```

> response : fail

```da
data = {
	status - 400
	message - "Signup fail!"
}
```



## Talker

### 상담자의 로그인

#### POST: /talker/signin

> require

```
data = {
	id - string
	pw - string
}
```

> response : success

```
data = {
  status - 200
  message - "Login success!"
  token - string
}
```

> response : fail

```
data = {
	status - 401
	message - "Login failed"
}
```

### 상담자의 회원가입

#### POST: /talker/signup

> require

```
data = {
  name - string
  phone - string
  id - string
  pw - string
  age - number
  sex - string
  field - string
  area - string
}
```

> response : success

```
data = {
	status - 200
	message - "Signup success!"
	token - string
}
```

> response : fail

```
data = {
  status - 401
  message - "Login failed"
}
```

