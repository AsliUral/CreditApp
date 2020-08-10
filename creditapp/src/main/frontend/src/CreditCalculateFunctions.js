function CreditCalculateFunctions(creditScore,person) {
    let creditLimitVal = 4;
    let result = {
        assent:false,
        credit:0
    }
    if(creditScore.creditScore< 500){
        result.assent=false;
        result.credit=0;
        return result;
    }else if((creditScore.creditScore>=500 && creditScore.creditScore<1000) && person.income<5000 ){
        result.assent=true;
        result.credit=10000;
        return result;
    }else if(creditScore.creditScore>=1000){
        result.credit = person.income*creditLimitVal;
        result.assent=true;
        return result;
    }else{
        result.assent=false;
        result.credit=0;
        return result;
    }
    
}
module.exports = CreditCalculateFunctions;
