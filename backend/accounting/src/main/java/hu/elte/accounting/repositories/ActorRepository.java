package hu.elte.accounting.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.accounting.entities.Actor;

@Repository
public interface ActorRepository extends CrudRepository<Actor, Integer> {
    Optional<Actor> findByEmail(String email);
}
