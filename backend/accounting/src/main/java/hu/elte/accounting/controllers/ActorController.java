package hu.elte.accounting.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.accounting.entities.Actor;
import hu.elte.accounting.entities.AuthUser;
import hu.elte.accounting.service.ActorService;

@RestController
@RequestMapping("/api/actor")
public class ActorController {

    @Autowired
    private ActorService actorService;

    @GetMapping(value = "/all")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Iterable<Actor>> getActors() {
        Iterable<Actor> actors = actorService.getAll();
        return ResponseEntity.ok(actors);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<Actor> login(@RequestBody AuthUser authUser) {
        Actor actor = actorService.login(authUser);
        if (actor == null) {
            return ResponseEntity.status(401).build();
        }
        return ResponseEntity.ok(actor);
    }

//    @PostMapping(value = "/register")
//    public ResponseEntity<Actor> registerNewActor(@RequestBody Actor actor) {
//        return actorService.register(actor);
//    }

//    @PostMapping(value = "/add")
//    public ResponseEntity<Actor> addNewActor(@RequestBody Actor actor) {
//        return actorService.register(actor);
//    }

    @PutMapping("/update/{id}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Actor> updateActor(@PathVariable Integer id, @RequestBody Actor actor) {
        return actorService.updateActor(id, actor);
    }

    @DeleteMapping("/delete/{id}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Actor> delete(@PathVariable Integer id) {
        return actorService.deleteActor(id);
    }
}
