package hu.elte.accounting.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import hu.elte.accounting.entities.Partner;

@Repository
public interface PartnerRepository extends CrudRepository<Partner, Integer> {
    Optional<Partner> findByName(String name);
}