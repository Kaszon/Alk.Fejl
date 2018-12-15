package hu.elte.accounting.repositories;

import java.sql.Date;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.accounting.entities.Actor;
import hu.elte.accounting.entities.Item;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {

    Iterable<Item> findAllByActor(Actor actor);

    Optional<Item> findByIdAndActor(Integer id, Actor actor);

    Iterable<Item> findByDateOfDeadlineBetweenAndActor(Date dateFrom, Date dateTo, Actor actor);

    Iterable<Item> findByDateOfCompletionBetweenAndActor(Date dateFrom, Date dateTo, Actor actor);

    Iterable<Item> findByPartnerId(Integer partnerId);

    Iterable<Item> findByPartnerIdAndActor(Integer partnerId, Actor actor);

}