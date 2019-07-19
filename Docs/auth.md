# Auth

## Listener

### 상담 요청자의 로그인

### POST : /listener/signin

> Require

```
id - string //아이디
pw - string	//비밀번호
```

> Response: Success

``` 
status - 200
body = {
  token - string
}
message - "Login success!"
```

> Response: Fail

```
status - 401
message - "Login failed"
```

### 상담 요청자의 회원가입

#### POST: /listener/signup

> Require

```
name - string	//이름
id - string	//아이디
pw - string	//비밀번호
age - string	//나이
location - string	//상담 요청자의 거주지
sex - string	//성별
phoneNumber - string	//휴대폰 번호
```

>  Response: Success

```
status - 200
message - "Signup success!"
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
id - string	//아이디
pw - string	//비밀번호
```

> Response: Success

```
status - 200
body = {
  token - string
}
message - "Login success!"
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
name - string	//이름
phoneNumber - string	//휴대폰 번호
id - string	//아이디
pw - string	//비밀번호
age - string	//나이
sex - string	//성별
field - string	//상담 분야
area - string	//상담자의 영업 장소
introduce - string	//한줄 소개
profile - string(url)	//프로필 사진
career - number	//경력
openCount - number //오픈 횟수
```

> Response: Success

```
status - 200
message - "Signup success!"
```

> Response: Fail

```
status - 401
message - "Login failed"
```

