var td =document.getElementsByTagName("td");
var li=document.getElementsByTagName("li");
for (let i=0;i<td.length;i++){
    var j=0;
    var arr=[];



        if (td[i].innerText=="✖")
        {
            // console.log("j")
            td[i].onclick=function () {
                // console.log(j );
                console.log(arr);
                if (j>0){
                    arr.pop();
                    console.log(arr);
                    console.log(j)
                    for (let i=0;i<j;i++){
                        li[i].className="";
                    }
                    j=j-1;

                    for (let i=0;i<j;i++){
                        li[i].className="passwordli";
                    }

                }
            }

        }else if (td[i].innerText=="清空"){

            td[i].onclick=function(){
                arr=[];
                for (let i=0;i<li.length;i++){
                    li[i].className="";
                }
                j=0;
            }

        }
        else {
            td[i].onclick=function () {
            j=j+1;
            // console.log(1);
            // // 获取到键盘上的值
            // console.log(typeof td[i].innerText);
            // console.log(typeof td[i].innerHTML);
            // li[i].className="passwordli";
            // console.log(j);
            if (j>li.length){
                j=li.length;
                alert("请输入"+li.length+"位有效密码");
            }else {
                for (var z=0;z<=j-1;z++){
                    li[z].className="passwordli";

                }
                arr.push(td[i].innerText);
            }
            console.log(arr);
        }
        // console.log(typeof td[i].innerText);
        // console.log(typeof td[i].innerHTML);
        
    }
}
