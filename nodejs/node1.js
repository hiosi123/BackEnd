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
