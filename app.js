'use strict';//Strict（厳格）モード
const number = process.argv[2] || 0;
/*numberにprocsee.argv[2]＝デフォルトで用意されたファイルの中の引数のValueの２番目の値を代入。ORで。もし空の場合は0を代入(undefindにしないため）（選択的代入）*/
let sum = 0;//初期値は0
for (let i = 1; i <= number; i++) {//iが１でiが１ずつ増えていく　numberと同じになったら停止
  sum = sum + i;//sumにiが足される　1+2+3+ …
}
console.log(sum);//sumを出す