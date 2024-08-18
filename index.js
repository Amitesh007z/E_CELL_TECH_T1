

window.addEventListener('scroll', () => {
    console.log(window.innerHeight,window.scrollY,window.innerHeight+window.scrollY,document.getElementById("la").offsetHeight)
    if (window.innerHeight + window.scrollY>= document.getElementById("la").offsetHeight ) {
        load();
    }
});

function load() {
  
    const newContent = document.createElement('div');
    newContent.className = 'cont';

    
    newContent.innerHTML = `
    <style>
    
.thomas{

    width:300px;
    height: 200px;
    border-radius: 20px;
}
.video{
    position: relative;
    bottom:600px;
    left:90px;

}

#i{
    border-radius: 85%;
    width: 40px;
    height: 40px;


}
.desc{
    display: flex;
    gap:3px;
}
#c{
    font-size: 13.5px;
    position: relative;
    bottom: 7px;
    left: 5px;

}
.p{
    position: relative;
    left: 48px;
    bottom: 25px;
}
.desc2{
    display: flex;
    flex-direction: row;
    position: relative;
    bottom: 5px;
}
.svg{
    width: 20px;
    height:20px;
    position: relative;
    left: 53px;
    bottom: 9px;
}
.descp{
    display: flex;
    flex-direction: column;
    
    
}
.pq{
    bottom: 50px;
    font-size: 15px;
    color: gray;
    left: 50px;
    position: relative;
}
.w{
position:relative;
bottom:540px;
}
.cont{
    bottom:1000px;
    display: flex;
    flex-direction: row;
    gap:16px;
}
}
    
    </style>
    <div class="w">
        <div class="cont">
        <div class="video">
           <img class="thomas" src="./src/thomas.jpg">
          <div class="desc"> <img id="i" src="./src/thom.jpg"> 
           <p id="c">Thomas Michael Shelby OBE DCM M<br> MP is a fictional character and the ... <br></p>
           <img style="width:40px;height: 30px;position: relative;left: 14px;" src="./src/more.png">
   
           
       </div>
       <div class="desp">
       <div class ="desc2">
           <p class="p">Thomas Shelby</p>
           <svg  class="svg"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#ffffff"></path> <path d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" fill="#ffffff"></path> </g></svg>
       </div>
       <p class="pq">300 M Views 12 hours ago</p>
       </div>
          
   
   
   
   
        </div>  
   
   
   
        <div class="video">
           <img class="thomas" src="./src/thomas.jpg">
          <div class="desc"> <img id="i" src="./src/thom.jpg"> 
           <p id="c">Thomas Michael Shelby OBE DCM M<br> MP is a fictional character and the ... <br></p>
           <img style="width:40px;height: 30px;position: relative;left: 14px;" src="./src/more.png">
   
           
       </div>
       <div class="desp">
       <div class ="desc2">
           <p class="p">Thomas Shelby</p>
           <svg  class="svg"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#ffffff"></path> <path d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" fill="#ffffff"></path> </g></svg>
       </div>
       <p class="pq">300 M Views 12 hours ago</p>
       </div>
       </div>
        
   
   
        <div class="video">
   
           <img class="thomas" src="./src/thomas.jpg">
          <div class="desc"> <img id="i" src="./src/thom.jpg"> 
           <p id="c">Thomas Michael Shelby OBE DCM M<br> MP is a fictional character and the ... <br></p>
           <img style="width:40px;height: 30px;position: relative;left: 14px;" src="./src/more.png">
   
           
       </div>
       <div class="desp">
       <div class ="desc2">
           <p class="p">Thomas Shelby</p>
           <svg  class="svg"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#ffffff"></path> <path d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" fill="#ffffff"></path> </g></svg>
       </div>
       <p class="pq">300 M Views 12 hours ago</p>
       </div>
   
       
      
          
        </div> 
        <div class="video">
           <img class="thomas" src="./src/thomas.jpg">
          <div class="desc"> <img id="i" src="./src/thom.jpg"> 
           <p id="c">Thomas Michael Shelby OBE DCM M<br> MP is a fictional character and the ... <br></p>
           <img style="width:40px;height: 30px;position: relative;left: 14px;" src="./src/more.png">
   
           
       </div>
       <div class="desp">
       <div class ="desc2">
           <p class="p">Thomas Shelby</p>
           <svg  class="svg"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#ffffff"></path> <path d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" fill="#ffffff"></path> </g></svg>
       </div>
       <p class="pq">300 M Views 12 hours ago</p>
       </div>
          
        
   
   
   
   </div>      
       </div>
       </div>
    `;

   
    document.body.appendChild(newContent);
}



document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { id: 'first', hoverSrc: './src/home-removebg-preview-removebg-preview.jpg', originalSrc: './src/home-removebg-preview.jpg' },
        { id: 'two', hoverSrc: './src/shorts-removebg-preview-removebg-preview.jpg', originalSrc: './src/shorts-removebg-preview.jpg' },
        { id: 'three', hoverSrc: './src/shorts-removebg-preview-removebg-preview.jpg', originalSrc: './src/subcriptions-removebg-preview.jpg' },
        { id: 'four', hoverSrc: './src/shorts-removebg-preview-removebg-preview.jpg', originalSrc: './src/You-removebg-preview (1).jpg' }
    ];

    images.forEach(image => {
        const imgElement = document.getElementById(image.id);
        imgElement.addEventListener('mouseover', function() {
            imgElement.src = image.hoverSrc;
        });
        imgElement.addEventListener('mouseout', function() {
            imgElement.src = image.originalSrc;
        });
    });
});
function scrollRight() {
    const container = document.querySelector('.scroll-content');
    container.scrollBy({ left: 20, behavior: 'smooth' }); 
}

function hia(){
    document.getElementById('idd').style.backgroundColor="white";

}
function hiaq(){
    document.getElementById('idd').style.backgroundColor="grey";

}
function hia1(){
    document.getElementById('uio').style.backgroundColor="white";

}
function hiaq1(){
    document.getElementById('uio').style.backgroundColor="grey";

}
function hia2(){
    document.getElementById('ui').style.backgroundColor="white";

}
function hiaq2(){
    document.getElementById('ui').style.backgroundColor="grey";

}
function hia3(){
    document.getElementById('uo').style.backgroundColor="lightgrey";

}
function hiaq3(){
    document.getElementById('uo').style.backgroundColor="black";

}
document.getElementById('ii').addEventListener('mouseover',hia)
document.getElementById('ii').addEventListener('mouseleave',hiaq)
document.getElementById('vc').addEventListener('mouseover',hia1)
document.getElementById('vc').addEventListener('mouseleave',hiaq1)
document.getElementById('f').addEventListener('mouseover',hia2)
document.getElementById('f').addEventListener('mouseleave',hiaq2)
document.getElementById('qt').addEventListener('mouseover',hia3)
document.getElementById('qt').addEventListener('mouseleave',hiaq3)