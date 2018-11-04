package hu.elte.accounting.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hu.elte.accounting.entities.Partner;

@Repository
public interface PartnerRepository extends CrudRepository<Partner, Integer> {

}