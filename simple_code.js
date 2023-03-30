const fs = require("fs");
const replace_This="Rameez";
const replace_with="Ramiz";
let review=true;
try {
    // fs.readdir(".", (err , data) => { reads file in current directory
    fs.readdir("data", (err , data) => {
        for(let i=0;i<data.length;i++){
            const item=data[i];
            let newFile="data/"+item.replaceAll(replace_This,replace_with);
            if(!review){
                fs.rename("data/"+item,newFile,()=>{
                    console.log("Renaming Successful");
                })
            }
            if("data/"+item != newFile) console.log("data/"+item+" will be renamed to "+newFile);
        }
        // console.log(data);
    })
} catch (err) {
    console.error(err);
}
