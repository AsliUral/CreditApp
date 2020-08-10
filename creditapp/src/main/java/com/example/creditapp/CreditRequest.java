package com.example.creditapp;

public class CreditRequest {
    private String id;
    private int credit;
    private boolean assent;
    private String phoneNumber;

    protected CreditRequest() {
    }

    public CreditRequest(String id, int credit, boolean assent, String phoneNumber) {
        this.id = id;
        this.credit = credit;
        this.assent = assent;
        this.phoneNumber = phoneNumber;
    }

    public String getId() {
        return id;
    }

    public int getCredit() {
        return credit;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public boolean isAssent() {
        return assent;
    }

}
