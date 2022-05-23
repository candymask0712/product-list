## React 상품 리스트 구현

## 실행 방법

1. 파일 다운로드
2. npm install로 의존성 모듈 설치
3. npm run start로 로컬 환경에서 클라이언트 실행

## 구현 내용

1. 브랜드 필터 (구현)

- 클릭 시 해당 브랜드로 필터링 된 상품 목록 노출

2. 색상 필터 (구현)

- 클릭 시 해당 색상으로 필터링 된 상품 목록 노출

3. 가격 필터 (일부 구현)

- 범위 조정 시 해당 가격 범위로 필터링 된 상품 목록 노출
- 현재 설정 된 금액 범위 기능 미구현

4. 카테고리 필터 (일부 구현)

- 클릭 시 카테고리로 필터링 된 상품 목록 노출
- 카테고리를 계층이 있는 트리구조로 구현하지 않음
  - 구현 계획
    - API를 통해 받은 카테고리 리스트 이용 트리구조 재구축
    - loop를 통해 순회 하면서 상위 카테고리와 하위 카테고리 구분
    - 분류 된 하위 카테고리를 상위 카테고리에 넣어줌
    - 객체 내 상위 카테고리 이름으로 키를 만들고 값은 배열로 만듬
    - 하위 카테고리를 요소를 해당하는 프로퍼티 내 배열 값으로 넣음
    - 분류가 완료 되면 객체를 순회 하면서 카테고리 목록 노출

5. 상품 목록 (구현)

- 조건에 맞는 상품과 정보를 보여줌

6. 페이지네이션 (미 구현)

- 구현 계획
  - total 데이터를 기반으로 총 페이지 수를 계산 (total / 20)
  - 계산 된 페이지 수 범위 내에서 최대 10개의 페이지 표시
  - 페이지가 변할때마다 현재 페이지가 목록의 가운데 위치
  - '<<' 버튼 클릭 시 첫 번째 페이지로 이동
  - '>>' 버튼 클릭 시 마지막 페이지로 이동

## 구현 우선 순위

- 1순위 : 상품 목록

  - 가장 중요한 정보이므로 최우선 순위

- 2순위 : 카테고리 필터

  - 필터 중 가장 우선 순위 높음
  - 가구 구매 시 가장 먼저 고려하는 사항임을 고려

- 3순위 : 브랜드 필터

  - 필터 중 우선 순위 높은 편
  - 본인 취향을 가장 우선시하는 고급가구 구매층 고려

- 4순위 : 페이지네이션

  - 가장 기본이 되는 기능 중 하나
  - 필터 중복 적용 시 해당되는 상품이 줄어들기에 우선 순위 조정
  - 필터 관련 기능을 종합적으로 테스트 하기 위해 개발 우선순위 조정

- 5순위 : 가격 필터

  - 필터 중 중간 정도의 우선 순위

- 6순위 : 색상 필터

  - 필터 중 가장 우선 순위 높음
  - 브랜드, 가격에 비해 상대적으로 중요도가 떨어짐
