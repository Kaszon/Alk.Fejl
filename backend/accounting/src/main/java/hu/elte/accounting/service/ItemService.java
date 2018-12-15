package hu.elte.accounting.service;

import java.sql.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hu.elte.accounting.entities.Item;
import hu.elte.accounting.repositories.ActorRepository;
import hu.elte.accounting.repositories.ItemRepository;

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private ActorRepository actorRepository;

    @Transactional(readOnly = true)
    public Iterable<Item> getAll(String email) {
        return itemRepository.findAllByActor(actorRepository.findByEmail(email).get());
    }

    @Transactional(readOnly = true)
    public Iterable<Item> getBetweenDeadlines(Date dateFrom, Date dateTo, String email) {
        return itemRepository.findByDateOfDeadlineBetweenAndActor(dateFrom, dateTo,
                actorRepository.findByEmail(email).get());
    }

    @Transactional(readOnly = true)
    public Iterable<Item> getBetweenCompletions(Date dateFrom, Date dateTo, String email) {
        return itemRepository.findByDateOfCompletionBetweenAndActor(dateFrom, dateTo,
                actorRepository.findByEmail(email).get());
    }

    @Transactional(readOnly = true)
    public Iterable<Item> getByPartnerId(Integer partnerId, String email) {
        return itemRepository.findByPartnerIdAndActor(partnerId, actorRepository.findByEmail(email).get());
    }

    @Transactional
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    @Transactional
    public Item updateItem(Integer id, Item item, String email) {
        Optional<Item> oItem = itemRepository.findByIdAndActor(id, actorRepository.findByEmail(email).get());
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
