
function ra() {
    var mnumber = prompt("請輸入M", 1);
    var ans1 = Math.floor(Math.random() * mnumber + 1);
    alert("獲得的亂數是" + ans1);
}
/*prompt是內建輸入函數
會把輸入值帶回等號*/
function max() {
    var An = prompt("請輸入A", 0);
    var Bn = prompt("請輸入B", 0);
    An=Number(An);
    Bn=Number(Bn);
    
    var ans2 = 0;
    if (An != Bn) {
        if (An > Bn) {
            ans2 = An;
        }
        if (An < Bn) {
            ans2 = Bn;
        }
        alert(ans2 + "比較大");
    } else {
        if (An == Bn) {
            alert("一樣大喔");
        }
    }
}

function arr() {
    /*定義數列長度,不一定要小於十啦
    只是我這樣設而已*/
    var l = prompt("請輸入亂數陣列長度(小於10)", 1);
    /*限制填的數字小於十的迴圈
    如果大於10會一直卡在這XD*/
    while (l > 10) {
        var l = prompt("請輸入亂數陣列長度(小於10)", 1)
    }
    //設定空陣列
    var arr1 = [];
    /*用迴圈寫一個在剛才填的長度下
    內容是1-99亂碼的陣列
    */
    for (i = 0; i <= (l - 1); i++) {
        arr1[i] = [Math.floor(Math.random() * 99) + 1];
    }
    alert(arr1);
    //因為陣列是從0開始所以-1
    alert("最後一個元素為" + arr1[l - 1]);
}

function squ() {
    var xnumber = prompt("請輸入A", 0);
    var ynumber = prompt("請輸入B", 0);
    var ans4 = (xnumber * xnumber) + (ynumber * ynumber);
    alert(ans4);
}

function year() {
    var y = prompt("請輸入西元年分", 0);
    //先排除0
    if (y != 0) {
        //排除(ELSE)整除400的其必為閏年
        if (y % 400 != 0) {
            //排除整除100的其必不為閏年
            if (y % 100 != 0) {
                //整除4的其必為閏年
                //反之則否
                if (y % 4 == 0) {
                    alert("是閏年喔!");
                } else {
                    alert("不是喔!");
                }
            } else {
                alert("不是喔!");
            }
        } else {
            alert("是閏年喔!");
        }
    } else {
        alert("不是喔!");
    }
}