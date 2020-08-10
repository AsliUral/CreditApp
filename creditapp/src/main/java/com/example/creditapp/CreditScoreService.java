package com.example.creditapp;

public class CreditScoreService {
    private Integer creditScore;

    protected CreditScoreService(){}

    public CreditScoreService(Integer creditScore){
        this.creditScore = creditScore;
    }

    public int getCreditScore() {
        return creditScore;
    }


}