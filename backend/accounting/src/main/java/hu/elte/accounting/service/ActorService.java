package hu.elte.accounting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hu.elte.accounting.entities.Actor;
import hu.elte.accounting.repositories.ActorRepository;

@Service
public class ActorService {
    @Autowired
    private ActorRepository actorRepository;
    
    public Iterable<Actor> all() {
        return actorRepository.findAll();
    }
}
