package hu.elte.accounting.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import hu.elte.accounting.entities.Category;
import hu.elte.accounting.repositories.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public Iterable<Category> getAll() {
        return categoryRepository.findAll();
    }

    @Transactional
    public Category addCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Transactional
    public Category updateCategory(Integer id, Category category) {
        Optional<Category> oCategory = categoryRepository.findById(id);
        if (!oCategory.isPresent()) {
            return null;
        }
        category.setId(id);
        return categoryRepository.save(category);
    }

    @Transactional
    public Category deleteCategory(Integer id) {
        Optional<Category> oCategory = categoryRepository.findById(id);
        if (!oCategory.isPresent()) {
            return null;
        }
        categoryRepository.deleteById(id);
        return oCategory.get();
    }
}
