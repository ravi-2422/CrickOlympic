const cricket_btn = document.getElementById("cricket_btn");
const olampic_btn = document.getElementById("olampic_btn");
const cricket_code_btn = document.getElementById("cricket_code_btn");
const olampic_code_btn = document.getElementById("olampic_code_btn");


cricket_btn.addEventListener("click", () => {
    window.open("https://share.streamlit.io/sktheoptimizer/whowillwinner/app.py");
});

olampic_btn.addEventListener("click", () => {
    window.open("https://oda-campus.herokuapp.com/");
});


cricket_code_btn.addEventListener("click", ()=>{
    window.open("https://github.com/skTheOptimizer/whowillwinner");
});

olampic_code_btn.addEventListener("click", ()=>{
    window.open("https://github.com/ravi-2422/olympics");
});
