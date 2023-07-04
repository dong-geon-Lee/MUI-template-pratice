//?  keyedObject 자기 자신을 넣는 건 이상한데? 왜 사용할까?
export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};
