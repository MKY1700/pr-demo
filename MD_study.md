마크다운이란?
문서를 웹에 간단하게 보여주기 위한 문법

1. 제목
# 이 깃허브 제목은 ~입니다

- 강조
*강조할 내용 1*
**내가 강조할 내용**
~~취소선~~
밑줄을 MD에서 지원이 안돼요
<u>밑줄</u>

- 목록
html에서 ul, ol 이런것들 만드는것
1. 안녕
1.1 안녕 2
1.1.1 안녕 3

- ul처럼
    - 이렇게도 만들어지고요
        -이렇게도 가능합니다
---
- 링크
[Google](https://google.com)
- 이미지도 가능
![대체텍스트(alt)](https://img0.yna.co.kr/photo/etc/epa/2024/03/25/PEP20240325091001009_P2.jpg)

- 이미지 + 링크
[![대체텍스트](https://www.chosun.com/resizer/v2/X6THIXK6CJM4NFNQRL3KLTOTVQ.jpg?auth=4ebd08bffeb7b2bd0c5ea077fcd50d3af86ce2e2eab65e7810c207597ffe2206&width=616)](https://google.com)

`
import pandas as pd
`
```python
print("hello world")
print("hi")
```
```javascript
const test = "hihi"
funtion add (a,b) {
    console.log(a+b)
}
```
```html
<a href="test.com">태그 예제</a>
```

- 표

| 헤더1 | 헤더 2 |
| --- | --- |
|셀1|셀2|

> A는 B라고 말했다.
> _(소크라테스)_

>인용문에
>>인용문이
>>>중첩

- 수평선 태그
---

- 줄바꿈

안녕
안녕하세요
<br>
이런 맹키로다가

- 주석

-- 시작 --
<!-- 주석의 내용 -->
-- 종료 --