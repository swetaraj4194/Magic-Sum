

function createNew(title){
    
    const inputCreate=document.createElement("input");

    
    inputCreate.id="num"
    
    inputCreate.type="text"
    inputCreate.value=title;
    const br=document.createElement("br")


    const ulist=document.querySelector(".list")
    ulist.appendChild(inputCreate);
    ulist.appendChild(br)

};


 //next 
submitElement=document.querySelector("form")

submitElement.addEventListener("submit",function addNewTodo(event){ 

 event.preventDefault();

 const inputField=document.querySelector("#input");
 const newValue=parseInt(inputField.value);
 
 
 createNew(newValue);
 inputField.value=null;
 pre()
 add()
});


function pre(){
  newNum=""
 number1= document.querySelectorAll("#num")[0].value;
 let stringToArray=Array.from(number1.toString()).map(Number);
 
 newArr=[2,stringToArray[0],stringToArray[1],stringToArray[2],stringToArray[3],parseInt(stringToArray[4])-2]

 for (let i = 0;i < newArr.length;i++){
  newNum = newNum + (newArr[i].toString())
  
}
document.querySelector("#pre").value=newNum;
}



 function add(){
      
    let  c=0;
    let value3 =''
     let value5 =''
     for (i=0;i < document.querySelectorAll("#num").length;i++){
      
     let x= document.querySelectorAll("#num")[i].value;
     
     
     if(i==1){

        let fixedArray = [9, 9, 9, 9,9]
        lastArray = Array.from(x.toString()).map(Number)
        newArray = [];
      
      for(let i = 0;i<=fixedArray.length-1;i++){
        newArray.push(fixedArray[i] - lastArray[i])
      }

        for (let i = 0;i < newArray.length;i++){
            value3 = value3 + (newArray[i].toString())
            
        }}


        if(i==2){

            let fixedArray = [9, 9, 9, 9,9]
            lastArray = Array.from(x.toString()).map(Number)
            newArray = [];
          
          for(let i = 0;i<=fixedArray.length-1;i++){
            newArray.push(fixedArray[i] - lastArray[i]);
          }
            for (let i = 0;i < newArray.length;i++){
                value5 = value5 + newArray[i].toString()
                
            }

     }

     c=c+parseInt(x);
  
   } 
   
    if(value3==''||value5==''){
      document.querySelector("#add").value= 0
    }
    else
    {
      document.querySelector("#add").value= c + parseInt(value3)+parseInt(value5)
    }


   document.getElementById("myNumber").innerHTML=value3;
   document.getElementById("myNumber2").innerHTML=value5;

}
   
  
   











 

 














 
 



