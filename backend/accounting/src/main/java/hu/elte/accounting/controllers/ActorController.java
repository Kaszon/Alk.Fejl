package hu.elte.accounting.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import hu.elte.accounting.entities.Actor;
import hu.elte.accounting.service.ActorService;

@RestController
@RequestMapping("/api/actor")
public class ActorController {
	
    @Autowired
    private ActorService actorService;
    
	@GetMapping(value= "/all")
    public ResponseEntity<Iterable<Actor>> getActors()
    {
        Iterable<Actor> actors = actorService.getAll();
        return ResponseEntity.ok(actors);
    }
}
