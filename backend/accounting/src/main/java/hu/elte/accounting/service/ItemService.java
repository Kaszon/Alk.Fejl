package hu.elte.accounting.service;

import java.sql.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hu.elte.accounting.entities.Item;
import hu.elte.accounting.repositories.ItemRepository;

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;
    private SecurityContext securityContext = SecurityContextHolder.getContext();

    @Transactional(readOnly = true)
    public Iterable<Item> getAll() {
        if (securityContext.getAuthentication() != null) {
            securityContext.getAuthentication().getPrincipal();
        }
        return itemRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Iterable<Item> getBetweenDeadlines(Date dateFrom, Date dateTo) {
        return itemRepository.findByDateOfDeadlineBetween(dateFrom, dateTo);
    }

    @Transactional(readOnly = true)
    public Iterable<Item> getBetweenCompletions(Date dateFrom, Date dateTo) {
        return itemRepository.findByDateOfCompletionBetween(dateFrom, dateTo);
    }

    @Transactional(readOnly = true)
    public Iterable<Item> getByPartnerId(Integer partnerId) {
        return itemRepository.findByPartnerId(partnerId);
    }

    @Transactional
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    @Transactional
    public Item updateItem(Integer id, Item item) {
        Optional<Item> oItem = itemRepository.findById(id);
        if (!oItem.isPresent()) {
            return null;
        }
        item.setId(id);
        return itemRepository.save(item);
    }

    @Transactional
    public Item deleteItem(Integer id) {
        Optional<Item> oItem = itemRepository.findById(id);
        if (!oItem.isPresent()) {
            return null;
        }
        itemRepository.deleteById(id);
        return oItem.get();
    }

}
