## WikiPage

### 프로젝트 소개

강의 관련 정보에 대한 게시판입니다. 사용자는 간편하게 강의 정보를 등록하고 공유할 수 있습니다.

[ 👉 **<u>배포 링크</u>**](https://wikipage-board.web.app)

### 🛠 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">

### 💡 기능 설명

- 랜딩 페이지
  - 등록된 게시글 목록이 제공됩니다.
  - 게시글은 처음 게시한 시간을 기준으로 `최신순`으로 보여집니다.
  - 각 페이지에서는 `최대 5개`까지의 목록을 볼 수 있습니다.
- 게시글 조회
  - 목록에서 게시물의 제목을 클릭하면 해당 게시글의 제목과 본문을 볼 수 있습니다.
  - 본문 내에서 다른 위키 페이지의 제목을 감지하면 자동으로 `하이퍼링크`가 걸리며, 클릭 시 해당 페이지로 이동합니다.
- 게시글 작성
  - 위키 페이지에서 "위키 추가하기" 버튼을 클릭하면 새로운 위키 페이지를 입력할 수 있는 창이 나옵니다.
  - 제목과 내용을 입력한 후 저장하면 새로운 위키 페이지가 생성됩니다.
  - 이때, `중복된 제목`으로 된 게시글은 등록할 수 없습니다.
- 게시글 수정
  - 게시글 페이지에서 "수정" 버튼을 눌러 페이지 내용을 수정할 수 있는 창으로 이동할 수 있습니다.
  - 수정 후 "수정 완료" 버튼을 통해 게시글을 업데이트 할 수 있습니다.
  - 이때, `중복된 제목`으로 게시글을 수정할 수 없습니다.

### 🔖 실행 및 빌드 방법

프로젝트를 로컬에서 실행하려면 다음 단계를 따라주세요.

- 저장소를 클론합니다.

```
git clone https://github.com/YeryunJung/JYR_WikiPage.git
```

- 프로젝트 폴더로 이동합니다.

```
cd client
```

- 필요한 패키지를 설치합니다.

```
npm install
```

- 로컬 서버를 실행합니다.<br />웹 브라우저에서 http://localhost:3000 으로 접속하여 프로젝트를 확인합니다.

```
npm run start
```

- 프로젝트를 빌드합니다.

```
npm run build
```

### ⚙️ 프로젝트 환경변수

이 프로젝트는 Firebase를 사용합니다.

- 환경변수 목록
  - `API_KEY`: Firebase 프로젝트의 API 키입니다.
  - `AUTH_DOMAIN`: Firebase 프로젝트의 인증 도메인입니다.
  - `DATABASE_URL`: Firebase Realtime Database의 URL입니다.
  - `PROJECT_ID`: Firebase 프로젝트의 ID입니다.
  - `STORAGE_BUCKET`: Firebase Storage의 버킷 이름입니다.
  - `MESSAGING_SENDER_ID`: Firebase Cloud Messaging의 Sender ID입니다.
  - `APP_ID`: Firebase 프로젝트의 앱 ID입니다.
