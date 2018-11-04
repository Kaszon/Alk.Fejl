package hu.elte.accounting.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.accounting.entities.Partner;
import hu.elte.accounting.service.PartnerService;

@RestController
@RequestMapping("/api/partner")
public class PartnerController {
    @Autowired
    private PartnerService partnerService;
    
    @GetMapping(value= "/all")
    public ResponseEntity<Iterable<Partner>> getPartners()
    {
        Iterable<Partner> actors = partnerService.all();
        return ResponseEntity.ok(actors);
    }
    
    @PostMapping(value = "/add")
    public ResponseEntity<Partner> addNewPartner(@RequestBody Partner partner) {
        return partnerService.addPartner(partner);        
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<Partner> updatePartner(@PathVariable Integer id, @RequestBody Partner partner) {
        return partnerService.updatePartner(id, partner);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Partner> delete(@PathVariable Integer id) {
        return partnerService.deletePartner(id);
    }
}
