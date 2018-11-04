package hu.elte.accounting.controllers;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.accounting.entities.Item;
import hu.elte.accounting.service.ItemService;

@RestController
@RequestMapping("/api/item")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping(value = "/all")
    public ResponseEntity<Iterable<Item>> getActors() {
        Iterable<Item> items = itemService.getAll();
        return ResponseEntity.ok(items);
    }

    @GetMapping(value = "/deadline")
    public ResponseEntity<Iterable<Item>> getBetweenDeadlines(@RequestParam Date dateFrom, @RequestParam Date dateTo) {
        Iterable<Item> items = itemService.getBetweenDeadlines(dateFrom, dateTo);
        return ResponseEntity.ok(items);
    }

    @GetMapping(value = "/completion")
    public ResponseEntity<Iterable<Item>> getBetweenCompletions(@RequestParam Date dateFrom, @RequestParam Date dateTo) {
        Iterable<Item> items = itemService.getBetweenCompletions(dateFrom, dateTo);
        return ResponseEntity.ok(items);
    }

    @GetMapping(value = "/byPartner/{partnerId}")
    public ResponseEntity<Iterable<Item>> getByPartnerId(@PathVariable Integer partnerId) {
        Iterable<Item> items = itemService.getByPartnerId(partnerId);
        return ResponseEntity.ok(items);
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Item> addItem(@RequestBody Item item) {
        item.setId(null);
        itemService.addItem(item);
        return ResponseEntity.ok(item);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Integer id, @RequestBody Item item) {
        Item result = itemService.updateItem(id, item);
        
        if (result == null)
            return ResponseEntity.notFound().build();
        
        return ResponseEntity.ok(result);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Item> deleteItem(@PathVariable Integer id) {
        Item result = itemService.deleteItem(id);
        if (result == null)
            return ResponseEntity.notFound().build();
        
        return ResponseEntity.ok().build();
    }

}
