var keypad = [["A", "B", "C", "D", "E"], ["F", "G", "H", "I", "J"], ["K", "L", "M", "N", "O"], [null, "1", "2", "3", null]];
var all = [];
var combinations = 0;
var moves = [[1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2]];
var vowels = ["A", "E", "I", "O"];
function keysequence(keypad, initial_key){
    
    initial_key = initial_key.toUpperCase();
    
    
    
    let initial_location = [];
    for(let i = 0; i < keypad.length; i++){
        if(initial_location.length == 2){
            break;
        }
        for(let j = 0; j < keypad[i].length; j++){
            if(initial_key == keypad[i][j]){
                initial_location = [i,j];
                break;
            }
        }
    }
    
    move(initial_location);
}

function countVowels(str){
    count = 0;
    for(let i = 0; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}

function move(start, length = 1){
    if(length == 1){
        all.push("");
    }
    if(length == 10){ //change to 10
        all[all.length-1] += keypad[start[0]][start[1]];
        if(countVowels(all[all.length-1]) > 2){
            all.pop();
        }
        combinations+= 1;
        all.push(all[all.length-1]);

        return;
    }
    for(let i = 0; i < moves.length; i++){
        if(all[all.length-1].length >= length){
            all[all.length-1] = all[all.length-1].substring(0,length-1);
        }
        if(0 <= (start[0] + moves[i][0]) && (start[0] + moves[i][0]) < 4 && 0 <= (start[1] + moves[i][1]) && (start[1] + moves[i][1]) <= 4){
            if(keypad[(start[0] + moves[i][0])][(start[1] + moves[i][1])] == null){
                continue;
            }
            all[all.length-1] += keypad[start[0]][start[1]];
            move([(start[0]+moves[i][0]),(start[1] + moves[i][1])], length+1);
        } else {
            continue;
            
        }
        
    }

}

keysequence(keypad, "1");
all.pop();
console.log(all.length);

console.log(all);