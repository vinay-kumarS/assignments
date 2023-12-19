const fs = require("fs").promises;


async function main(){
    const data = await fs.readFile("a.txt" , "utf-8");
    console.log(data);

    const mod_data = change(data);

    await fs.writeFile("a.txt" , mod_data , "utf-8");

    console.log("Opeation Sucess....!");
}

main();

function change(str){
    let word = "";
    let temp = "";
    let space_en = false;
    for(let i=0;i<str.length;i++){
        if(str[i] == " " && !space_en){
            word = word+temp + " ";
            temp = "";
            space_en = true;
        }
    
        if(str[i] != " "){
            temp = temp + str[i];
            space_en = false;
        }
    }
    
    word = word + temp;

    return word;
}



