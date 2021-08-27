let screen=document.querySelector('input');
const ulist=document.querySelector('table');


  screen.addEventListener('keypress', (e) => {
    if (e.which === 13 && screen.value!="") 
    {
        let screentext=screen.value;
        
        let tr=document.createElement('tr');
        let inp=document.createElement('input');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        let td5=document.createElement('td');
        inp.value=screentext;
        td1.append(inp);
        inp.disabled = true;
        //td1.innerHTML=screentext;
        let icon=document.createElement('i');
        icon.classList.add("fa","fa-solid","fa-sort-up");
        //console.log(icon);
        td2.append(icon);
        let icon1=document.createElement('i');
        icon1.classList.add("fa","fa-solid","fa-trash");
        //console.log(icon1);
        td3.append(icon1);
        let icon2=document.createElement('i');
        icon2.classList.add("fa","fa-solid","fa-keyboard");
        //console.log(icon2);
        td4.append(icon2);

        let icon3=document.createElement('i');
        icon3.classList.add("fa","fa-solid","fa-sort-down");
        //console.log(icon3);
        td5.append(icon3);
        icon1.addEventListener('click',()=>{
            tr.remove();
        })

        icon2.addEventListener('click',()=>{
            inp.disabled = !inp.disabled;
        })

        icon3.addEventListener('click',()=>{
            let x=tr.nextSibling;
            let y=tr;
            if(x!=null)
            {
                tr.remove();
                x.after(y);
            }
        })

        icon.addEventListener('click',()=>{
            let x=tr.previousSibling;
            let y=tr;
            if(x!=null)
            {
            tr.remove();
            x.before(y);
            }
            
        })

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        ulist.append(tr);
        
        screen.value="";
    }
})

const b=document.querySelector('button');

b.addEventListener('click',()=>{
    if (screen.value!="") 
    {
        let screentext=screen.value;
        
        let tr=document.createElement('tr');
        let inp=document.createElement('input');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        let td5=document.createElement('td');
        inp.value=screentext;
        td1.append(inp);
        inp.disabled = true;
        //td1.innerHTML=screentext;
        let icon=document.createElement('i');
        icon.classList.add("fa","fa-solid","fa-sort-up");
       // console.log(icon);
        td2.append(icon);
        let icon1=document.createElement('i');
        icon1.classList.add("fa","fa-solid","fa-trash");
       // console.log(icon1);
        td3.append(icon1);
        let icon2=document.createElement('i');
        icon2.classList.add("fa","fa-solid","fa-keyboard");
        //console.log(icon2);
        td4.append(icon2);

        let icon3=document.createElement('i');
        icon3.classList.add("fa","fa-solid","fa-sort-down");
       
       
        // console.log(icon3);
        td5.append(icon3);
        icon1.addEventListener('click',()=>{
            tr.remove();
        })

        icon2.addEventListener('click',()=>{
            inp.disabled = !inp.disabled;
        })

        icon3.addEventListener('click',()=>{
            let x=tr.nextSibling;
            let y=tr;
            if(x!=null)
            {
                tr.remove();
                x.after(y);
            }
        })

        icon.addEventListener('click',()=>{
            let x=tr.previousSibling;
            let y=tr;
            if(x!=null)
            {
            tr.remove();
            x.before(y);
            }
            
        })

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        ulist.append(tr);
        
        screen.value="";
    }

})