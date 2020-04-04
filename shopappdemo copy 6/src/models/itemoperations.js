import {Item} from './Item';
export const itemOperations  = {
    items:[],
    urls:['https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_ML3_.jpg','https://m.media-amazon.com/images/I/61R9bfu4mWL._AC_UY218_ML3_.jpg','https://m.media-amazon.com/images/I/71EvOK7BhuL._AC_UY218_ML3_.jpg','https://m.media-amazon.com/images/I/71EvOK7BhuL._AC_UY218_ML3_.jpg'],
    fill(){
        let j = 0;
        for(let i= 1; i<=10; i++,j++){
            this.items.push(new Item(i, "Mobile"+i,900*i,this.urls[j]));
            if(j==3){
                j=0;
            }
        }
    return this.items;
    }
}