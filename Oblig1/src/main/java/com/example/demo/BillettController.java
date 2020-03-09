package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class BillettController {
    ArrayList<Billett> liste = new ArrayList<>();

    @GetMapping("/hent")
    public ArrayList<Billett> returBillett(){
        return liste;
    }

    @PostMapping("/lagre")
    public void lagre(Billett billett){
        liste.add(billett);
    }

    @PostMapping("/slett")
    public void slett(){
        liste.clear();
    }
}
