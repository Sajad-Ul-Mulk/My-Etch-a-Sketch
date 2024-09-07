
// document.addEventListener('click',drawLayout,{once:true})
const bod= document.querySelector('body');
const content=document.createElement("div");
   content.style.width='800px'
   content.style.height='500px'
   content.style.marginLeft='260px'
   content.style.marginTop='50px'
   content.style.backgroundColor='lightgray'
    bod.appendChild(content);
    
   for (let i = 1; i <= 256*10; i++) {
        const div=document.createElement("div");
        div.style.width="10px";
        div.style.height="10px";
        div.style.overflow="hidden";
        div.style.backgroundColor="gray";
        div.style.margin="1px";
        content.appendChild(div);
        content.style.display="flex";
        content.style.flex="1 1 auto";
        content.style.rowGap="0"
        content.style.gap="0"
        content.style.boxSizing="border-box";
        content.style.flexWrap="wrap"
       div.addEventListener('mouseover', function(){
           div.style.backgroundColor='black'
           }
       )
    }
const div=document.querySelector("div");

div.addEventListener('click',(e)=>{
    console.log(e.target.id);
})