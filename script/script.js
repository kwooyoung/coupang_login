/*login.html에서 script.js 파일을 head 안에 써놨기 때문에
바디를 인식하려면 먼저 화면을 읽은다음에 얘를 인식하라 라는 뜻의 
window.onload를 함수를 먼저 넣어줘야함.*/ 
window.onload-function(){
    const pw_show_hide = document.querySelector('.pw_show_hide');
    console.log(pw_show_hide);
    let i = true;
    pw_show_hide.addEventListener('click',function(){
        if(i==true){
            pw_show_hide.style.backgroundPosition=''
            i=false;

        }else{
            i=true;
        }
    })

}//onload end 

