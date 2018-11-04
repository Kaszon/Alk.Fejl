package hu.elte.accounting.repositories;

import java.sql.Date;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.accounting.entities.Item;

@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {
    
    Iterable<Item> findByDateOfDeadlineBetween(Date dateFrom, Date dateTo);
    Iterable<Item> findByDateOfCompletionBetween(Date dateFrom, Date dateTo);
    Iterable<Item> findByPartnerId(Integer partnerId);
    

}