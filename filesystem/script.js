const { isUtf8 } = require('buffer');
const fs = require('fs'); //Yaha pr file system (fs) require kr rhe hain mtlb ab mere pass file system ki sari powers aajaein gi aur woh power hm 'const fs' variable mein stor kr k kahi bhi use kr skte hain.

//writeFile k through hm ek file create kr sktein hain jo ki hmne yaha pr ki hai 'hello.txt' k naam se aur uske andr hm log yahi pr content bhi likh sktein hain jaisa aap niche dekh skte ho and lastly hm ek callback function bhi create krte hain and usmein argument 'error' dete hain, function ka kaam yeh hota hai ki agr koi error aae toh hm usko dekh skaein or else bol dein 'file created successfully'.
// fs.writeFile('hello.txt', 'My first file in node js', function(err){
//     if(err){
//         console.error(err);
//     }else{
//         console.log('Successfully I have written my first code in Node js');
//     }
// })

//fs.readFile k through hm log koi bhi files ko read kr sktein hain..
//ismein ek 'utf-8' term use kiya gya hai jo ki ek encoding interpreter hai. Yeh UTF-8 node.js k files ko read krte time kaam aata hai. Agr hm koi file read kr rhe hain usmein koi emoji ya special character ho jaise ki ('Hello world, こんにちは世界 🌍) yeh file hai agr hme isko read krna hai toh without utf-8 krein gein toh woh hme buffer return kregi (binary digits) jo ki hm ni smjh paein gein and if we use UTF-8 then it'll make it readable for us with all that special japanese characters and earth emoji
fs.readFile('./heyoo.txt', 'utf-8', function(err, data){
    if(err){
        console.error("We got this error", err);
    }else{
        console.log("The output is:", data);
        
    }
})

//We can also use const data = fs.readFileSync('./heyoo.txt', 'utf-8'); fs.readFileSync() returns the "file content directly", so we store it in a variable (const data). but fs.readFile() doesn’t return the file content immediately, but passes it through a callback when it's done, so data is used inside the callback. As you can see in line number 15.
const data = fs.readFileSync('./heyoo.txt', 'utf-8');
console.log(data);



// //By using appendFile hm log pehle se likhe hue file mein kuch cheezein ussi k aage add kr skte hain and the format would be completely same bs writeFile k jgh appendFile likhna hoga. NOTE: agr jis file mein aap append krna chah rhe ho woh exist hi ni krti hai tb appendFile usko create krega pehle fir usmein woh diya hua content likh dega.
// fs.appendFile('hello.txt', ' and now I am using appendFile to edit this file which was created by using writeFile', function(err){
//     if(err){
//         console.error(err);
//     }else{
//         console.log('File successfully edited.');
//     }
// })


// fs.rename('hello.txt', 'heyoo.txt', function(err){
//     if(err){
//         console.error(err);
//     }else{
//         console.log("File name changed successfully.");
//     }
// })


// fs.copyFile('heyoo.txt', './copy/copy.txt', function(err){
//     if(err){
//         console.error(err);
//     }else{
//         console.log("Copy of the file is done successfully.");
//     }
// })

//With the help of fs.unlink() function we can delete the file only.
fs.unlink('./copy/copy.txt', function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("File has deleted successfully");
    }
})

//With the help of fs.rmdir() we can only delete the blank folder. If I'll try this function on the file then I'd get instantly get an error or if I'd try to delete any folder which is having sub folder or a file then also I'd get an error but still anyhow you want to remove that folder then you can do one thing i.e. fs.rmdir("path..", {recursive: true}, callback function(err)); In short write {recursive: true} and it'll remove that folder. 
//NOTE: In future rather than using fs.rmdir() use fs.rm() with all the same arugments as you've seen in fs.rmdir(). In future fs.rmdir() won't be there in node.js.
fs.rmdir('./copy', {recursive: true}, function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("Copy named folder has been removed successfully.");
        
    }
})


//To create a folder we use fs.mkdir("Path...", {recursive: ture}, callback function(err))
fs.mkdir('./copy', {recursive: true}, function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("New folder has been created successfully.");
        
    }
})