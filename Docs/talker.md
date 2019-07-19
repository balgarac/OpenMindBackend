# talker

### 전체 상담원 리스트

### GET: /talker

> Require

```
none
```

> Response : Success

```
status - 200
data - {
	talkers = [
		{
			name - string
			phoneNumber - string
			age - number
			sex - string
			field - string
			area - string
			introduce - string
			profile - string
			token - string
			career - number
			openCount - number
		}
	]
}
```

### 태그에 의한 상담원 검색

### GET: /talkerBytag/:tag

> Require

```
tag - string
내가 선택한 태그
```

> Response: Success

```
status - 200
data = {
	talker = {
		name - string
		phoneNumber - string
		age - number
		sex - string
		field - string
		area - string
		introduce - string
		profile - string
		token - string
		career - number
		openCount - number
	}
}
```

> Response: Fail

```
status - 400
message - Bad request
tag 정보를 주지 않았을 때 발생.
```

### 내 카테고리에 맞는 상담원

### GET: /talkerBycategory

> Require

```
category - string[]
```

> Response: Success

```
status - 200
data = {
	talkers = [
		{
			name - string
			phoneNumber - string
			age - number
			sex - string
			field - string
			area - string
			introduce - string
			profile - string
			token - string
			career - number
			openCount - number
		}
	]
}
```

> Response : Fail

```
status - 400
message - Bad request
category 정보를 주지 않았을 때 발생.
```

### 상담원 토큰에 의한 상담원 검색

### GET: /talkerBytoken/:talkerToken

> Require

```
talkerToken - string
```

> Response: Success

```
status - 200
data = {
	talker = {
		name - string
		phoneNumber - string
		age - number
		sex - string
		field - string
		area - string
		introduce - string
		profile - string
		token - string
		career - number
		openCount - number
	}
}
```

> Response: Fail

```
status - 400
message - Bad request
talkerToken 정보를 주지 않았을 때 발생.
```

### 전체 상담원 랭킹

### GET: /ranking

> Require

```
none
```

> Response: Success

```
status - 200
data = {
	[
		{
			name - string
			phoneNumber - string
			age - number
			sex - string
			field - string
			area - string
			introduce - string
			profile - string
			token - string
			career - number
			openCount - number
		}
	]
}
```

### openCount 증가

### GET: /incOpenCount/:token
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
	age - number
	sex - string
	field - string
	area - string
	introduce - string
	profile - string
	token - string
	career - number
	openCount - number
}
```



### 태그별 상담원 랭킹


### 마이페이지 -> 지역 카테고리


### 채팅 요청()

