package com.example.creditapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DbSeeder implements CommandLineRunner {
    private PersonRepository personRepository;
    private CreditRequestRepository creditRequestRepository;

    public DbSeeder(PersonRepository personRepository, CreditRequestRepository creditRequestRepository) {
        this.personRepository = personRepository;
        this.creditRequestRepository = creditRequestRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Person p1 = new Person(
                "Asli",
                "Ural",
                "123456",
                "05074010627",
                10000,
                new CreditScoreService(600)

        );
        Person p2 = new Person(
                "Ege",
                "Ural",
                "111111",
                "05536742638",
                1,
                new CreditScoreService(500)

        );
        Person p3 = new Person(
                "Gaye",
                "Ural",
                "222222",
                "05074036947",
                20000,
                new CreditScoreService(500)

        );

        Person p4 = new Person(
                "Onur",
                "Ural",
                "333333",
                "05074036947",
                4000,
                new CreditScoreService(600)

        );

        // drop all hotels
        this.personRepository.deleteAll();

        this.personRepository.save(p1);
        this.personRepository.save(p2);
        this.personRepository.save(p3);
        this.personRepository.save(p4);
    }
}