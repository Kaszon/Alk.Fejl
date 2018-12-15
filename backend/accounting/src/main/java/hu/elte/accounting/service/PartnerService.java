package hu.elte.accounting.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import hu.elte.accounting.entities.Partner;
import hu.elte.accounting.repositories.ItemRepository;
import hu.elte.accounting.repositories.PartnerRepository;

@Service
public class PartnerService {
    @Autowired
    private PartnerRepository partnerRepository;
    @Autowired
    private ItemRepository itemRepository;

    @Transactional(readOnly = true)
    public Iterable<Partner> all() {
        return partnerRepository.findAll();
    }

    @Transactional
    public ResponseEntity<Partner> addPartner(@RequestBody Partner partner) {
        Optional<Partner> oPartner = partnerRepository.findByName(partner.getName());
        if (oPartner.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        partner.setId(null);
        return ResponseEntity.ok(partnerRepository.save(partner));
    }

    @Transactional
    public ResponseEntity<Partner> updatePartner(Integer id, Partner partner) {
        Optional<Partner> oPartner = partnerRepository.findById(id);
        if (!oPartner.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        partner.setId(id);
        return ResponseEntity.ok(partnerRepository.save(partner));
    }

    @Transactional
    public ResponseEntity<Partner> deletePartner(Integer id) {
        Optional<Partner> oPartner = partnerRepository.findById(id);
        if (!oPartner.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        itemRepository.findByPartnerId(id).forEach(item -> itemRepository.delete(item));
        partnerRepository.delete(oPartner.get());
        return ResponseEntity.ok().build();
    }
}
