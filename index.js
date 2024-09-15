const fs = require('fs');
const path = require('path');
const replaceThis= "ani";
const replaceWith = "shil";
const preview = false; 
const folder = path.join(__dirname);
try{
    fs.readdir(folder, (err, data)=>{
        console.log(data);
        for(let index = 0; index<data.length; index++){
            const item = data[index];
            let oldFile = path.join(folder, item);
            let newFile =path.join(folder, item.replaceAll(replaceThis, replaceWith));
            if(!preview){
                fs.rename(oldFile, newFile, ()=>{
                console.log("Rename successfull");
            })}
            else{
                if(oldFile !== newFile) console.log(folder + item + "will be rename to " + newFile);
            }
        }
    });
} catch(err){
    console.error(err);
}