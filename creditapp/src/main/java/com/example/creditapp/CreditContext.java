package com.example.creditapp;

public class CreditContext{
    private Person person;
    private int credit;
    private boolean assent;

    public CreditContext(Person person,int credit,boolean assent){
        this.person = person;
        this.credit = credit;
        this.assent = assent;
    }
    public int getCredit() {
        return credit;
    }
    public Person getPerson() {
        return person;
    }
    public boolean getAssent() {
        return assent;
    }
    public String toString(){
        return person.toString() +"-" + credit +"-"+assent;
    }
}