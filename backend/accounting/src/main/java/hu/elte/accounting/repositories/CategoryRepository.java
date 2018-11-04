package hu.elte.accounting.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.accounting.entities.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer> {

}