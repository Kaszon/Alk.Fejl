package hu.elte.accounting.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.accounting.entities.Actor;

@Repository
public interface ActorRepository extends CrudRepository<Actor, Integer> {

}
