function convert(){
    let inp=document.getElementById('inp').value;
    let inp_unit=document.getElementById('inp_unit').value;
    let op_unit=document.getElementById('out_unit').value;
    console.log("Entered Height:",inp);
    console.log("input unit",inp_unit);
    console.log("output unit",op_unit);

    //conversion
    if(inp_unit=='mi' && op_unit=='cm'){
        result=inp*160934.4;
    }
    else if(inp_unit=='cm' && op_unit=='mi'){
        result=inp/160934.4;
    }
    else if(inp_unit=='cm' && op_unit=='m'){
        result=inp/100;
    }
    else if(inp_unit=='m' && op_unit=='cm'){
        result=inp*100;
    }
    else if(inp_unit=='cm' && op_unit=='km'){
        result=inp/100000;
    }
    else if(inp_unit=='km' && op_unit=='cm'){
        result=inp*100000;
    }
    else if(inp_unit=='cm' && op_unit=='i'){
        result=inp/2.54;
    }
    else if(inp_unit=='i' && op_unit=='m'){
        result=inp*0.0254;
    }
    else if(inp_unit=='m' && op_unit=='i'){
        result=inp/0.0254;
    }
    else if(inp_unit=='i' && op_unit=='km'){
        result=inp/0.0000254;
    }
    else if(inp_unit=='km' && op_unit=='i'){
        result=inp*0.0000254;
    }
    else if(inp_unit=='i' && op_unit=='mi'){
        result=inp/63360;
    }
    else if(inp_unit=='mi' && op_unit=='i'){
        result=inp*63360;
    }
    else if(inp_unit=='m' && op_unit=='km'){
        result=inp/1000;
    }
    else if(inp_unit=='km' && op_unit=='m'){
        result=inp*1000;
    }
    else if(inp_unit=='m' && op_unit=='mi'){
        result=inp/1609.34;
    }
    else if(inp_unit=='mi' && op_unit=='m'){
        result=inp*1609.34;
    }
    else if(inp_unit=='mi' && op_unit=='km'){
        result=inp*1.60934;
    }
    else if(inp_unit=='km' && op_unit=='mi'){
        result=inp/1.60934;
    }
   

    else{
        result=0;
    } 
    document.getElementById('disp_op_res').innerHTML=result;
    console.log(result);
}