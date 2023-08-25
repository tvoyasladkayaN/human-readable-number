module.exports = function toReadable (number) {
   let fromOneToNineteen = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
   };

   let dozen;
   
   if (number >= 20) {
   dozen = {
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
   };

   let ArrNumber = String(number).split('');

   if (ArrNumber.length === 2) {

     if (number % 10 == 0) {
        return dozen[number];
     } else {

        if (ArrNumber[0] == 2) {
            return 'twenty' + ' ' + fromOneToNineteen[ArrNumber[1]];
        }
        if (ArrNumber[0] == 3) {
            return 'thirty' + ' ' + fromOneToNineteen[ArrNumber[1]];
        }
        if (ArrNumber[0] == 4) {
            return 'fourty' + ' ' + fromOneToNineteen[ArrNumber[1]];
        }
        if (ArrNumber[0] == 5) {
            return 'fifty' + ' ' + fromOneToNineteen[ArrNumber[1]];
        }
        if (ArrNumber[0] == 6) {
            return 'sixty' + ' ' + fromOneToNineteen[ArrNumber[1]];
        }
        if (ArrNumber[0] == 7) {
            return 'seventy' + ' ' + fromOneToNineteen[ArrNumber[1]];
        }
        if (ArrNumber[0] == 8) {
            return 'eighty' + ' ' + fromOneToNineteen[ArrNumber[1]];
        }
        if (ArrNumber[0] == 9) {
            return 'ninety' + ' ' + fromOneToNineteen[ArrNumber[1]];
        }
    }
}

if (ArrNumber.length === 3) {

       if (number % 100 != 0) {

        if (number % 10 === 0) {

            if (ArrNumber[1] == 2) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + dozen[20];
            }
            if (ArrNumber[1] == 3) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + dozen[30];
            }
            if (ArrNumber[1] == 4) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + dozen[40];
            }
            if (ArrNumber[1] == 5) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + dozen[50];
            }
            if (ArrNumber[1] == 6) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + dozen[60];
            }
            if (ArrNumber[1] == 7) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + dozen[70];
            }
            if (ArrNumber[1] == 8) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + dozen[80];
            }
            if (ArrNumber[1] == 9) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + dozen[90];
            }
            if (ArrNumber[1] == 0) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[ArrNumber[2]];
            }
           
        

        if (ArrNumber[1] == 1) {

            if (ArrNumber[2] == 0) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[10];
            }
            if (ArrNumber[2] == 1) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[11];
            }
            if (ArrNumber[2] == 2) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[12];
            }
            if (ArrNumber[2] == 3) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[13];
            }
            if (ArrNumber[2] == 4) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[14];
            }
            if (ArrNumber[2] == 5) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[15];
            }
            if (ArrNumber[2] == 6) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[16];
            }
            if (ArrNumber[2] == 7) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[17];
            }
            if (ArrNumber[2] == 8) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[18];
            }
            if (ArrNumber[2] == 9) {
                return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + fromOneToNineteen[19];
            }
        }

        if (ArrNumber[1] == 2) {
            return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + ' twenty ' + fromOneToNineteen[ArrNumber[2]];
        }
        if (ArrNumber[1] == 3) {
            return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + ' thirty ' + fromOneToNineteen[ArrNumber[2]];
        }
        if (ArrNumber[1] == 4) {
            return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + ' fourty ' + fromOneToNineteen[ArrNumber[2]];
        }
        if (ArrNumber[1] == 5) {
            return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + ' fifty ' + fromOneToNineteen[ArrNumber[2]];
        }
        if (ArrNumber[1] == 6) {
            return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + ' sixty ' + fromOneToNineteen[ArrNumber[2]];
        }
        if (ArrNumber[1] == 7) {
            return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + ' seventy ' + fromOneToNineteen[ArrNumber[2]];
        }
        if (ArrNumber[1] == 8) {
            return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + ' eighty ' + fromOneToNineteen[ArrNumber[2]];
        }
        if (ArrNumber[1] == 9) {
            return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ' + ' ninety ' + fromOneToNineteen[ArrNumber[2]];
        }
     
    } else {
        return fromOneToNineteen[parseInt(ArrNumber[0])] + ' hundred ';
       }

      } else {
         return fromOneToNineteen[number];
      }
     
    }
  }
}
