# 젤리핏 간판 QR 랜딩 페이지

## 시안 확인

`index.html`을 Chrome 또는 Edge에서 열면 됩니다. 모바일 화면은 개발자 도구의 기기 모드(`Ctrl+Shift+M`)에서 확인할 수 있습니다. 설치나 빌드가 필요 없습니다.

## 연락처와 위치 수정

`site.js` 맨 위의 `site`에 카카오톡 1:1 채팅 주소, 전화번호, 네이버 플레이스 주소, 도로명 주소, 입구 설명과 사진 경로를 모아 두었습니다. 이미지 파일은 `assets/`에 두고 상대 경로를 입력하세요. 연락처나 링크 값이 비어 있으면 해당 버튼은 ‘준비 중’으로 표시됩니다.

전화번호와 도로명 주소는 젤리핏 간판 작업지시서를 반영했습니다. 입구 사진은 같은 자료에 나온 정면 계단 입구의 간판 교체 전 현장 사진입니다. 간판 교체 후 사진이 있으면 사진과 설명을 함께 갱신하세요.

## 승인 후 공개 및 QR 연결

1. 카카오톡 채널의 1:1 채팅 링크와 젤리핏 네이버 플레이스 공유 링크를 넣습니다.
2. 젤리핏이 관리하는 GitHub 저장소의 `main` 브랜치 루트에 `index.html`, `style.css`, `site.js`, `assets/`를 올립니다. 저장소의 **Settings → Pages**에서 **Deploy from a branch → main → /(root)**를 선택합니다. [GitHub Pages 배포 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
3. 호스팅을 옮겨도 QR 주소를 유지하려면 젤리핏이 관리하는 도메인 또는 하위 도메인을 연결하고 HTTPS를 적용합니다. 해당 도메인과 경로를 고정한 채 이후 수정분을 같은 브랜치에 올리면 같은 주소에서 페이지가 업데이트됩니다. [사용자 지정 도메인 연결](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
4. 최종 HTTPS 주소로 QR을 만든 뒤, 인쇄 전에 휴대폰 카메라로 스캔해 페이지와 세 버튼을 확인합니다.
