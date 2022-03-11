// process.cwd() 현재 프로세스가 실행되는 위치입니다.

// __ doubleunder 경로를 체크할때

// process.env 시스템 환경변수, 프로그램 설치할때, 환경 변수는 process.evn 로 접근 가능

// UV_THREADPOOL_SIZE = 8 노드 환경 백그라운드 개수 설정

// nextTick() => Promise .then() => setImmediate() === setTimeout() 둘중 누가 먼저 실행될지 모름

// process.exit(0) 프로세스가 끝났다

// process.uptime() 프로세스 시간을 보여줌

const os = require('os');

// console.log(os.cpus())
console.log(os.freemem());

// Path 처리 하기 위해 사용
const path = require('path');

console.log(path.join(__dirname, '..', '/node1.js'));
console.log(path.resolve(__dirname, '..','/var.js'));


// searchParams - WHATWG 방식에서 쿼리스트링(search) 부분 처리를 도와주는 객체

// querystring - 기존 노드 방식에서는 url querystring을 querystirng 모듈로 처리


// crypto - 암호화는 가능하지만 복호화는 불가능
// 암호화: 평문을 암호로 만듦, 복호화: 암호를 평문으로 해독
// 비밀번호는 암호화가 아니다 - 해시이다

//createHash(알고리즘): 사용할 해시 알고리즘을 넣어줍니다.

//pbkdf2 salt 와 비번을 해시화 하여 더 복잡하게 만듬

// 양방향 암호화
// createCipheriv 대칭형 암호화(암호문 복호화 가능)

//sha512 암호화
//AES 양방향 암호화
//RSA 비대칭 암호화
//aws kms 아마존 키 매니지먼트 서비스

//util
// deprecated promisify
// 프로그램을 만들었는데 잘못 만들었다, 기존 코드를 지우기도 어려운 상황
// util.deprecated 된 함수는 잘못 만들어 졌다고 알려줌, 점차 유저들이 다른걸 사용함
// util.promisify 점점 콜백에서 프로미시파이로 넘어간다. 
// 이걸로 콜백 함수를 감싸주면, 콜백 함수가 된다. 단 콜백이 (error, data) => {} 형식이여야한다.
