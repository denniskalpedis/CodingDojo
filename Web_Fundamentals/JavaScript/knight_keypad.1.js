var keypad = [["A", "B", "C", "D", "E"], ["F", "G", "H", "I", "J"], ["K", "L", "M", "N", "O"], [null, "1", "2", "3", null]];
var all = [];
var combinations = 0;
vowels = ["A", "E", "I", "O"];
var moves = [[1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1,2]];
function keysequence(keypad, initial_key){
    
    initial_key = initial_key.toUpperCase();
    
    
    
    initial_location = [];
    for(let i = 0; i < keypad.length; i++){
        if(initial_location.length == 2){
            break;
        }
        for(let j = 0; j < keypad[i].length; j++){
            if(initial_key == keypad[i][j]){
                console.log("Loop has run " + ((i)*5+j+1) + " Times"); //just to check how many times this loop runs.
                initial_location = [i,j];
                break;
            }
        }
    }
    

    
    // console.log(keypad[initial_location[0]][initial_location[1]] + move(initial_location));
    // console.log(move(initial_location));
    move(initial_location);
    // console.log(all.length);
    // console.log(combinations);

        

    
    // console.log(vowels.includes(keypad[initial_location[0]][initial_location[1]]));
    // console.log(initial_location);
}

function move(start, length = 1){
    if(length == 1){
        all.push("");
        console.log(all);
    }
    if(length == 4){
        all[all.length-1] += keypad[start[0]][start[1]];
        combinations+= 1;
        console.log(combinations);
        // console.log("found one");
        all.push('');
        // console.log(all[all.length-1]);
        return;
        // return keypad[start[0]][start[1]];
    }
    for(let i = 0; i < moves.length; i++){
        if(0 <= (start[0] + moves[i][0]) && (start[0] + moves[i][0]) < 4 && 0 <= (start[1] + moves[i][1]) && (start[1] + moves[i][1]) <= 4){
            // console.log((start[0] + moves[i][0]) + " " + (start[1] + moves[i][1]));
            if(keypad[(start[0] + moves[i][0])][(start[1] + moves[i][1])] == null){
                // console.log("Invalid!");
                all.pop();
                continue;
            }
            // console.log("valid move");
            
            // console.log(keypad[(start[0] + moves[i][0])][(start[1] + moves[i][1])]);
            // console.log(length);
            // if(length < 4){
            all[all.length-1] += keypad[start[0]][start[1]];
                // return keypad[start[0]][start[1]] + move([(start[0]+moves[i][0]),(start[1] + moves[i][1])], length+1);
            move([(start[0]+moves[i][0]),(start[1] + moves[i][1])], length+1);
                // return keypad[(start[0] + moves[i][0])][(start[1] + moves[i][1])] + move([(start[0]+moves[i][0]),(start[1] + moves[i][1])], length+1);
            // } else {
                // return keypad[(start[0] + moves[i][0])][(start[1] + moves[i][1])]
            // }
        } else {
            all.pop();
            continue;
            // return;
            // console.log("Invalid!");
            // console.log((start[0] + moves[i][0]) + " " + (start[1] + moves[i][1]));
            
        }
        
    }

}

keysequence(keypad, "a");
console.log(all);