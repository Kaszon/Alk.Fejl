package hu.elte.accounting.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.accounting.entities.Item;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {

}