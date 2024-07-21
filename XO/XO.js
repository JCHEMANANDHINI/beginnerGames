var s=0;
$('td').on("click",function(){
  if(s==0){
  $(this).text("X");
  $(this).css("fontSize","70px")
  $(this).css("text-align","center")
  $(this).css("background","#8FE7EB")
  s=1;
}
else{
  $(this).text("O");
  $(this).css("fontSize","70px")
  $(this).css("text-align","center")
  $(this).css("background","#DE6466")
  s=0;
}
})
