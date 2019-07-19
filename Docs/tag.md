# tag

### 전체 태그 리스트

### GET: /tagList

> Require

```
none
```

> Response: Success

```
status - 200
data = {
	tags = [
		tag - string
	]
}
```

> Response: Fail

```
status - 400
message - Bad request
```



### 태그 업데이트

### POST: /tagUpdate

> Require

```
token - string, tagList - string[];
```

> Response: Success

```
status - 200

```

> Response: Fail

```
status - 400
```