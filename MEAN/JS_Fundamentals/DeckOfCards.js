function Deck(){
    
    function Card(rank, suit, value){
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }

    this.checkCards = function(){
        for (var card of this.cards){
            console.log(card);
        }
    };
    this.shuffle = function(){
        for (var card in this.cards){
            var idx = Math.floor(Math.random()*(this.cards.length-1));
            var temp = this.cards[card];
            this.cards[card] = this.cards[idx];
            this.cards[idx] = temp;
        }
    }
    this.reset = function(){
        this.cards = [];
        var suits= ["Spades", "clubs", "Hearts", "Diamonds"];
        var ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
        for (var suit of suits){
            var val = 1;
            for (var rank of ranks){
                var card = new Card(rank, suit, val);
                val ++;
                this.cards.push(card)
            }
        }
    };
    this.reset();
    
    this.deal = function(){
        return this.cards.pop();
    };
}
function Player(n, deck){
    this.name = n;
    this.hand = [];
    this.deck = deck;
    this.draw = function(){
        this.hand.push(this.deck.deal());
    };
    this.discard = function(){
        this.hand.pop();
    };
}

var myDeck = new Deck();
myDeck.checkCards();
myDeck.shuffle();
// myDeck.checkCards();
// console.log("dealt card");
// console.log(myDeck.deal());
// myDeck.reset();
// myDeck.checkCards();
var playerone = new Player("dennis", myDeck);
playerone.draw();
playerone.draw();
playerone.draw();
playerone.draw();
playerone.draw();
console.log(playerone.hand);
