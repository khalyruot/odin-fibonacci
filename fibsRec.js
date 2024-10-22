function fibsRec(arrIndex){


    if(arrIndex==0){
        return 0;
    }
    else if(arrIndex==1){
        return 1;
    }
    else{
        return fibsRec(arrIndex-1)+fibsRec(arrIndex-2);
    }
    
}

console.log("fibsRec: " + fibsRec(8-1));


//[0, 1, 1, 2, 3, 5, 8, 13, 21]
/* 0:0
   1:  1
   2:       1
   3:           2
   4:                3
   5:                   5
   6:                        8
   7:                            13
   8:                                21 */
   