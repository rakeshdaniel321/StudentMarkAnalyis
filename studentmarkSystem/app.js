function sum(){
    const num1=document.getElementById("num1").value;
    const num2=document.getElementById("num2").value;
    const num3=document.getElementById("num3").value;
    const num4=document.getElementById("num4").value;
    const num5=document.getElementById("num5").value;
    
    let total = (parseInt(num1) || 0) + (parseInt(num2) || 0) + (parseInt(num3) || 0) + (parseInt(num4) || 0) + (parseInt(num5) || 0);
 document.getElementById("result").innerText = "Result: " + total;
 return total;
}



function avg(){
    let total = sum();
    let average = total/5;
    document.getElementById("average").innerText = "Average: " + average;
    return average;
}



function grade(){
    let average = avg();
    let grade='';
    if(average>=90){
         grade = "A";
    }
    else if(average>=80){
         grade = "B";
    }
    else if(average>=70){
         grade = "B+";
    }
    else if(average>=60){
         grade = "C";
    }
    else{
         grade = "F";
    }
    document.getElementById("grade").innerText = "Grade: " + grade;

}

