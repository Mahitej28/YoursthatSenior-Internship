var screen = document.querySelector('#screen')
screen.addEventListener('keypress', (event) => {

  const charCode = event.charCode;
  if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
    event.preventDefault();
  }
});

var btn = document.querySelectorAll('.btn')


for(item of btn){

    item.addEventListener("click", (e)=>{

        btntext = e.target.innerHTML
        screen.value+=btntext
    });
}

function sin(){
    screen.value = Math.sin(screen.value);
}

function cos(){
    screen.value = Math.cos(screen.value);
}

function tan(){
    screen.value = Math.tan(screen.value);
}

function pow(){
    screen.value = Math.pow(screen.value, 2);
}

function sqrt(){
    screen.value = Math.sqrt(screen.value, 2);
}

function log(){
    screen.value = Math.log(screen.value);
}

function pi(){
    screen.value = 3.14159265359;
}

function e(){
    screen.value = 2.71828182846;
}

function fact(){
    
    var num, f, i;
    num = screen.value;
    f=1;

    for(i=1; i<=num; i++){
        f = f*i
    }

    screen.value=f;
}

function del(){

    screen.value= screen.value.substr(0, screen.value.length-1)
}
