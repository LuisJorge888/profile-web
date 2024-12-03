document.getElementById("rowCopyEmail").addEventListener("click", copyEmail);
document.getElementById("rowCopyEmail").addEventListener("mouseover", fixTooltips);


function copyEmail(){
    navigator.clipboard.writeText("ruizdiazjorgeluis@gmail.com");
    document.getElementById("spanCopyId").style.display = "none";
    document.getElementById("spanCopyIdSuccess").style.display = "block";

}

function fixTooltips(){
    document.getElementById("spanCopyId").style.display = "";
    document.getElementById("spanCopyIdSuccess").style.display = "none";
}