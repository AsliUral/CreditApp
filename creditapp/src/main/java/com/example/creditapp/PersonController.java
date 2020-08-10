package com.example.creditapp;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/person")
public class PersonController {
    private PersonRepository personRepository;

    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping("/all")
    public List<Person> getAll(){
        List<Person> person = this.personRepository.findAll();

        return person;
    }

    @PutMapping
    public void insert(@RequestBody Person person){
        this.personRepository.insert(person);
    }

    @PostMapping
    public void update(@RequestBody Person person){
        this.personRepository.save(person);
    }


    @GetMapping("/{id}")
    public Person getById(@PathVariable("id") String id){
        Optional<Person> person =  this.personRepository.findById(id);
        Person p = person.get();
        return p;
    }

    @GetMapping("/{id}/creditScore")
    public Integer getScoreById(@PathVariable("id") String id){
        Optional<Person> person =  this.personRepository.findById(id);
        Person p = person.get();
        return p.getCreditScoreService().getCreditScore();
    }




}
