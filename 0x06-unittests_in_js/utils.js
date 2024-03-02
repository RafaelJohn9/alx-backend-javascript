/**
 * Utils - contains basic methods
 */

class Utils{
    constructor(){
    }

    // used to do basic arithmetic functions
    calculateNumber (type, a, b){
       a = Math.round(a);
       b = Math.round(b);
       if (type === 'SUM'){
              return (a + b);
       }
       else if (type === 'SUBTRACT'){
              return (a - b);
       }   
      else if(type === 'DIVIDE'){
            if (b === 0){
	       return ("Error");
      }
      return (a / b);
      }
   }

}

module.exports = Utils;
