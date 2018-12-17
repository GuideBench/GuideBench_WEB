
# [Web & App X Guide bench] Project : WEB

 Guide bench의 관리자 전용 WEB의 README 파일입니다.

## 개발환경 설치
  
   - **[Node.js 설치]**(https://nodejs.org/en/) - 함께 npm 도 설치됨
   - **Angular CLI 설치** : 프로젝트와 콤포넌트 생성에 이용됨
       - > npm install -g @angular/cli 
       - > ng --version 
   - **추천 개발도구** : visual studio code - https://code.visualstudio.com/ ( 추천 view -> extentions : Angular 6  Snippets - *** )
    
## WEB 시작
 
   - **clone**하여 .zip파일 다운받기 -> 다운 완료 후 압축해제
   - **Visual Studio Code Open**
   - **File->Open Folder->guideguide** : project 폴더 열기
   - **Terminal->New Terminal** : terminal 실행 (실행된 terminal창 안에서 각종 명렁어 실행)
   - **cd guideguide** : project 폴더로 이동
   - **ng serve --open** ( --open (or just -o) 옵션은 자동으로 http://localhost:4200/ 로 브라우징한다.) - server 가 시작되고, 파일들을 관찰하며, 변화가 있으면 자동으로 다시 시작한다.
       - > 만약 4200말고 다른 번호의 포트로 열고 싶다면 "ng serve --port (포트숫자)"를 입력하면 된다.
   - 브라우징된 파일 : src/index.html <== { src/app/app.modeul.ts + src/app/app.component.{ts + html+ css} 

## WEB의 구성

   - **__.html** : 눈에 보이는 부분을 담당
   - **__.ts** : 눈에 보여지는 기능을 담당
   - 연결구조 : index.html <= main.ts <= app/app.module.ts <= app/app.component.ts"
   - **`<app-root></app-root>`** 라는 태그 대신에 특정 내용이 화면에 보이게된다. 즉, **`<app-root></app-root>`**가 하나의 View라는 의미입니     다. 당연히 그에 대응되는 Component가 존재한다.\n",
   - src/app 폴더에 보면 **app.component.ts** 파일이 있습니다. Component를 정의한 파일이고 TypeScript로 작성되어 있기 때문에 확장자는** .ts**를 이용한다. 파일을 열어보면 다음과 같은 내용이 들어있습니다."

## Build
  배포를 하고싶다면 빌드를 해줘야한다. 
   
   - 빌드 방법은 **ng build** 라는 명령으로 하며, 빌드를 하고 나면 dist라는 폴더가 생긴다.
     이 폴더 안에는 html 파일과 여러 javaScript 파일이 생성되며, 이는 server 없이도 실행이 가능하게 되고, 서버의 /public 폴더에 복사해서 사용할 수 있다.
    
## Final
   성공적으로 배포가 된 뒤 **http://13.124.180.79:3000/#/** 에 접속
   
   - **시작화면**
   ![default](https://user-images.githubusercontent.com/18274751/50104328-0c25b780-026d-11e9-9b09-873b12029770.PNG)

   
