// interface vs type 
// 相同点：都可以给对象指定类型
// 不同点:
//   ·接口，只能为对象指定类型
//   ·类型别名，不仅可以为对象指定类型，实际上还可以为任意类型指定别名
// 推荐：能使用type就赢type


type person = {
  name: string,
  age: number,
  gender: string,
  hoddy: string,
  grilFridnd?: string,
  sayHi: (content: string) => void
}


let obj:person = {
  name: "DK",
  age: 15,
  gender:"MAN",
  hoddy: "烫头",
  grilFridnd: "乔碧萝",
  sayHi: (content) => {
    console.log(`Hello ${content}`)
  }
}


const a = document.getElementById('link') as HTMLElement;

const alink = <HTMLAnchorElement>document.getElementById('link')

interface Ilength {
  length: number
}

function getId<T extends Ilength>(val: T[]) {
  return val.length
}