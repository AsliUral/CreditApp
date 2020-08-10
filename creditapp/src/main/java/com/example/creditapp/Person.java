package com.example.creditapp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "Person")
public class Person {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private Integer income;
    @Indexed(direction = IndexDirection.ASCENDING)
    private CreditScoreService creditScoreService;


    protected Person() {

    }

    public Person(String firstName, String lastName, String id, String phoneNumber, int income, CreditScoreService creditScoreService ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.income = income;
        this.phoneNumber = phoneNumber;
        this.creditScoreService = creditScoreService;
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public Integer getIncome() {
        return income;
    }


    public CreditScoreService getCreditScoreService() {
        return creditScoreService;
    }

    public String toString(){
        return firstName+","+lastName+","+income+","+phoneNumber+","+id+","+creditScoreService;
    }


}