# listener

### 전체 사용자 리스트

### GET: /listener

> Require

```
none
```

> Response: Success

```
status - 200
data = [
  {
    name - string
    phoneNumber - string
    age - string
    sex - string
    location - string
    token - string
  }
]
```

> Response: Fail

```
status - 400
```

### 사용자 토큰 이용해서 가져오기

### GET: /listenerBytoken/:token

> Require
```
token - string
```

> Response: Success
```
status - 200
data = {
  name - string
  phoneNumber - string
  age - string
  sex - string
  location - string
  token - string
}
```
