const fs = require("fs");
const path = require('path');
const replace_This = "Rameez";
// const replace_This = "Ramiz";
const replace_with = "Ramiz";
// const replace_with = "Rameez";
const folder = __dirname
let review=false
// let review=true
try {
    // fs.readdir(".", (err , data) => { reads file in current directory
    fs.readdir(folder, (err , data) => {
        for(let i=0;i<data.length;i++){
            const item=data[i];
            let oldFile=path.join(folder,item);
            let newFile=path.join(folder,item.replaceAll(replace_This,replace_with));
            if(!review){
                fs.rename(oldFile,newFile,()=>{
                    console.log("Renaming Successful",item,newFile);
                })
            }
            if("data/"+item != newFile) console.log("data/"+item+" will be renamed to "+newFile);
        }
        // console.log(data);
    })
} catch (err) {
    console.error(err);
}
