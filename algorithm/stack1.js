const progresses = [95, 90, 99, 99, 80, 99]
const speeds = [1, 1, 1, 1, 1, 1]
const list = [];

for (let i=0; i<progresses.length; i++) {
    remain = Math.ceil((100 - progresses[i]) / speeds[i])
    list.push(remain);

}
// a b 가있을때 a 가 b 보다 작으면 count[i] = count 출력 
// 아니면 count+1

list.push(100);
console.log(list);

let count = 1;
let countList = [];

list.reduce((prev, cur, idx) => {
    if (prev < cur){
        countList.push(count);
        count = 1;
    } else {
        count += 1
        return prev
    }
    return cur
})
console.log(countList);
