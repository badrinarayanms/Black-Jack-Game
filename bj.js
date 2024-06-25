let deck=[];
let letter=["A","J","Q","K",2,3,4,5,6,7,8,9,10];
let set=["C","D","H","S"];
letter.map((char)=>{
    set.map((shape)=>{
        const card=document.createElement("img");
        card.src=`./cards/${char+"-"+shape}.png`;
        card.className="card";
        card.alt=`${char}`;
        deck.push(card);
    });
});

const dealer=document.querySelector(".dealer");
const player=document.querySelector(".player");


document.addEventListener('DOMContentLoaded', (event) => {
    const i=document.createElement("img");
    i.src="./cards/BACK.png";
    i.className="card";
    i.alt="0";
    const res=document.querySelector(".res");
    const closed=document.createElement("card");
    closed.innerHTML=`<img src="./cards/BACK.png" class="card">`;
    dealer.appendChild(i);
    
    const rand=Math.floor(Math.random()*(5-2)+1);
   function getcard(){
    const r=Math.floor(Math.random()*deck.length);
    const card =deck[r];
    const a=deck.splice(r,1);
    return card;
   }
    for(let j=0;j<rand;j++){
        dealer.appendChild(getcard()?.cloneNode(true));
    }
    
    player.appendChild(getcard().cloneNode(true));
    player.appendChild(getcard().cloneNode(true));
    const pelem=player.children;
    let psum=0;
    let dsum=0;
    const childcount=0;
    Array.from(pelem).map(calcsump);
    
   
    // console.log(a);
    function calcsump(ele){
        if(ele.alt=="J"||ele.alt=="Q"||ele.alt=="K"){
            ele.alt="10";
            psum+=+ele.alt;
    }else if(ele.alt=="A"){ele.alt="1";psum+=+ele.alt;}else{
        psum+=+ele.alt;
    }
    }
    function calcsumd(ele){
        if(ele.alt=="J"||ele.alt=="Q"||ele.alt=="K"){
            ele.alt="10";
            dsum+=+ele.alt;
    }else if(ele.alt=="A"){ele.alt="1";psum+=+ele.alt;}else{
        dsum+=+ele.alt;
    }
    }
    const delem=dealer.children;
    Array.from(delem).map(calcsumd);
    const add=document.querySelector(".add");
    const stand=document.querySelector(".stand");
    function addbtn(){
        if(psum<21){ 
        player.appendChild(getcard(deck).cloneNode(true));
        calcsump(player.lastChild);
        if(psum==21){
            res.innerHTML=`<strong>you wonn</strong>`;
            stand.removeEventListener("click",standbtn);
            res.classList.add("ress");

        }else if(psum>21){
            res.innerHTML=`<strong>you lose</strong>`
            stand.removeEventListener("click",standbtn);
            res.classList.add("ress");

        }
        
        }else{
            
        }}
        function standbtn(){
            add.removeEventListener("click",addbtn);
            stand.removeEventListener("click",standbtn);
            const back=getcard(deck);
            i.src=back.src;
            i.alt=back.alt;
            
            calcsumd(i);
            console.log(psum);
            console.log(dsum);
            if(dsum>21){
                res.innerHTML=`<strong>you won</strong>`;
                res.classList.add("ress");

            }else if(psum>dsum){
                res.innerHTML=`<strong>you won</strong>`;
                res.classList.add("ress");

            }else if(dsum>psum){
                res.innerHTML=`<strong>dealer won</strong>`;
                res.classList.add("ress");

            }
        }
    add.addEventListener("click",addbtn);
    
    stand.addEventListener("click",standbtn);
    

});
let sum=0;
