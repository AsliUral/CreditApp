const CreditCalculateFunctions = require("../CreditCalculateFunctions");

result1 = {
    assent:false,
    credit:0
};

result2 = {
    assent:true,
    credit:10000
};

result3 = {
    assent:true,
    credit:32
};

inputPerson = {id:"123456",firstName:"Asli",lastName:"Ural",phoneNumber:"05074010627",income:10000,creditScoreService:{creditScore:600}};
inputCredit = {
    creditScore:4
}

inputPerson2 = {id:"123456",firstName:"Asli",lastName:"Ural",phoneNumber:"05074010627",income:4000,creditScoreService:{creditScore:600}};
inputCredit2 = {
    creditScore:600
}

inputPerson3 = {id:"123456",firstName:"Asli",lastName:"Ural",phoneNumber:"05074010627",income:8,creditScoreService:{creditScore:1000}};
inputCredit3 = {
    creditScore:1000
}

test("assent is should be false and credit is should be 0", () => {
    expect(CreditCalculateFunctions(inputCredit,inputPerson)).toEqual(result1);
});

test("assent is should be true and credit is should be 10000", () => {
    expect(CreditCalculateFunctions(inputCredit2,inputPerson2)).toEqual(result2);
});

test("assent is should be true and credit is should be 32", () => {
    expect(CreditCalculateFunctions(inputCredit3,inputPerson3)).toEqual(result3);
});

