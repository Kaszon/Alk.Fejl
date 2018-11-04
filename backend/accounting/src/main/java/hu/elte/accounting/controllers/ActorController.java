package hu.elte.accounting.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.accounting.entities.Actor;
import hu.elte.accounting.repositories.ActorRepository;

@RestController
@RequestMapping("/api/actor")
public class ActorController {
	
	@Autowired
    private ActorRepository actorRepository;
    
    @GetMapping("")
    public Iterable<Actor> getAll() {        
    	return actorRepository.findAll();    	
    }
    
    
    
}
