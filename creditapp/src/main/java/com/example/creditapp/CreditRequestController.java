package com.example.creditapp;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("*")
public class CreditRequestController {
    private CreditRequestRepository creditRequestRepository;

    public CreditRequestController(CreditRequestRepository creditRequestRepository) {
        this.creditRequestRepository = creditRequestRepository;
    }

    @GetMapping("/creditRequest/all")
    public List<CreditRequest> getAll(){
        List<CreditRequest> creditRequest= this.creditRequestRepository.findAll();

        return creditRequest;
    }



    @GetMapping("/creditRequest/{id}")
    public CreditRequest getScoreById(@PathVariable("id") String id){
        Optional<CreditRequest> CreditRequest =  this.creditRequestRepository.findById(id);
        CreditRequest c = CreditRequest.get();
        return c;
    }



    @PostMapping("/creditRequest")
    public int insert(@RequestBody CreditContext creditContext){
        System.out.println(creditContext);
        CreditRequest c = new CreditRequest(
                creditContext.getPerson().getId(),
                creditContext.getCredit(),
                creditContext.getAssent(),
                creditContext.getPerson().getPhoneNumber()
        );
        System.out.print(creditContext.getCredit());
        this.creditRequestRepository.insert(c);


        return 0;
    }


}


