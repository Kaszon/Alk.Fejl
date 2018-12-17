package hu.elte.accounting.controllers;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import hu.elte.accounting.entities.NewItem;
import hu.elte.accounting.service.ItemService;

@CrossOrigin
@RestController
@RequestMapping("/api/item")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping(value = "/all")
    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Item>> getItems() {

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Iterable<Item> items = itemService.getAll(user.getUsername());
        return ResponseEntity.ok(items);
    }

    @GetMapping(value = "/deadline")
    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Item>> getBetweenDeadlines(@RequestParam Date dateFrom, @RequestParam Date dateTo) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Iterable<Item> items = itemService.getBetweenDeadlines(dateFrom, dateTo, user.getUsername());
        return ResponseEntity.ok(items);
    }

    @GetMapping(value = "/completion")
    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Item>> getBetweenCompletions(@RequestParam Date dateFrom,
            @RequestParam Date dateTo) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Iterable<Item> items = itemService.getBetweenCompletions(dateFrom, dateTo, user.getUsername());
        return ResponseEntity.ok(items);
    }

    @GetMapping(value = "/byPartner/{partnerId}")
    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Item>> getByPartnerId(@PathVariable Integer partnerId) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Iterable<Item> items = itemService.getByPartnerId(partnerId, user.getUsername());
        return ResponseEntity.ok(items);
    }

    @PostMapping(value = "/add")
    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Item> addItem(@RequestBody NewItem item) {        
        Item newItem = itemService.addNewItem(item);
        if(newItem == null) {
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.ok(newItem);
    }  

    @PutMapping(value = "/update/{id}")
    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Item> updateItem(@PathVariable Integer id, @RequestBody Item item) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Item result = itemService.updateItem(id, item, user.getUsername());

        if (result == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(result);
    }

    @DeleteMapping(value = "/delete/{id}")
    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Item> deleteItem(@PathVariable Integer id) {
        Item result = itemService.deleteItem(id);
        if (result == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok().build();
    }

}
