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

import hu.elte.accounting.entities.Category;
import hu.elte.accounting.service.CategoryService;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping(value = "/all")
    public ResponseEntity<Iterable<Category>> getCategories() {
        Iterable<Category> categories = categoryService.getAll();
        return ResponseEntity.ok(categories);
    }

    @PostMapping(value = "/add")
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        category.setId(null);
        categoryService.addCategory(category);
        return ResponseEntity.ok(category);
    }

    @PutMapping(value = "update/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable Integer id, @RequestBody Category category) {
        Category result = categoryService.updateCategory(id, category);

        if (result == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(result);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Category> deleteItem(@PathVariable Integer id) {
        Category category = categoryService.deleteCategory(id);
        if (category == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok().build();
    }
}
