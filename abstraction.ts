interface SilverCard{
    service1();
}
class Card implements SilverCard{
    service1(){
        console.log('Service1');
    }
    service2(){
        console.log('Service2');
    }
    service3(){
        console.log('Service3');
    }
}
let card:SilverCard = new Card();

let card2:Card = card as Card;
card2.service3();
card2.service2();
card.service1();
