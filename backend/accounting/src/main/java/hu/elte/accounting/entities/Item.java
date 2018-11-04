package hu.elte.accounting.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Min;

public class Item {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column
    private Long actorId;
    
    @Column(columnDefinition = "VARCHAR2(30) NOT NULL")    
    private String category;
    
    @Column(columnDefinition = "VARCHAR2(50) NOT NULL")
    private String name;
    
    @Column(columnDefinition = "VARCHAR2(50) NOT NULL")
    private Long partnerId;
    
    @Column
    @Min(0)
    private Integer amount;
    
    @Column
    private Date dateOfDeadline;
    
    @Column
    private Date dateOfCompletion;
    
    @Column(columnDefinition ="VARCHAR2(50) NOT NULL")
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getActorId() {
        return actorId;
    }

    public void setActorId(Long actorId) {
        this.actorId = actorId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPartnerId() {
        return partnerId;
    }

    public void setPartnerId(Long partnerId) {
        this.partnerId = partnerId;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Date getDateOfDeadline() {
        return dateOfDeadline;
    }

    public void setDateOfDeadline(Date dateOfDeadline) {
        this.dateOfDeadline = dateOfDeadline;
    }

    public Date getDateOfCompletion() {
        return dateOfCompletion;
    }

    public void setDateOfCompletion(Date dateOfCompletion) {
        this.dateOfCompletion = dateOfCompletion;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
