nodejs study 1st

Object.keys 에 대해서
객체를 배열로 반환
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

.map
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map


.reduce 
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

배포 에러
1. 백엔드와 db 연결이 안됨
??
atlas ip 허용에 빈스톡 아이피추가
그래도 안됨
빈스톡 ec2 재시작 후 정상화

2. react build 이후 하얀화면

엄.. 로컬에서도 동일한 증상
netlify 배포문제가 아닌듯함
해결중...
https://github.com/nevvve/nodejs_study/assets/141805889/3874183f-10d8-45e9-bcd1-bcb07d3a8d7a
배포 세팅중 publish directory 를 public 으로 해서 생긴 문제..

로컬은 cors 에러때문에 당연히 안되는거였다

public? build?

public은 개발자가 빌드하기전 코드를 남겨두기위한 디렉토리
build는 react가 빌드이후에 생긴 코드집합

3.redirection 문제

https://github.com/nevvve/nodejs_study/assets/141805889/193058a6-4908-45fb-b099-b29b6c6defbe
/apitasks로 요청을 보내서 안됐음
왜?
환경변수 오타..

/api/* http://<beanstalk url>/api/:splat 200

에서 api/ 를 빼먹었기 때문

환경변수만 볼게 아니라 redirects 확인도 해야하는것..

4. 배포된 프론트에서 /login 관련 문제

정적파일을 제공하기 때문에 로컬에서 테스트하는것과는 다르다

별도로 /* 들어오는 요청을 index.html로 넘겨줘야하는것

잘 생각해보면 내 도메인도 아닌디 어찌보면 당연했던거 아닐까..

5. 추가로 알게된것들
빈스톡관련 네트워크 기본 설정들
빈스톡은 코드 작성하면서 봤던 출력을 볼순 없을까??
인스턴스에 접근만 가능하다면 가능!
https://github.com/nevvve/nodejs_study/assets/141805889/a21fcd26-4dc6-420c-8a7f-3cb267cb89ec
/var/log/web.stdout.log 에 적혀있다..
/var/log/nginx/error.log 는 nginx 로그

빈스톡 로그관련 설정들 
https://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/AWSHowTo.cloudwatchlogs.html

netlify 의 리디렉션 설정은
netlify.toml 로도 가능한듯 싶다
smb나 nginx 처럼 구획별로 나누는듯한 설정
https://docs.netlify.com/routing/redirects/

6. 그외 궁금한것들
tasks를 사용자별로 구분해서 주려면?
tasks model에 사용자를 추가하고 분리해주는식으로..

비밀번호 관련 로직 추가 하려면?
대소문자 $%% 등등..

프론트쪽에서도 유저 검증을 하려면?

jwt 가 최선인가? 세션? 이건뭔데..

내일은 쉬니까 천천히 적용해보자
