package hu.elte.accounting.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Partner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(columnDefinition = "VARCHAR2(60) NOT NULL")    
    private String name;
    
    @Column(columnDefinition = "VARCHAR2(60) NOT NULL")
    private String city;
    
    @Column(columnDefinition = "VARCHAR2(60) NOT NULL")
    private String address;
    
    @Column(columnDefinition = "VARCHAR2(11) NOT NULL")
    private Integer taxNum;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getTaxNum() {
        return taxNum;
    }

    public void setTaxNum(Integer taxNum) {
        this.taxNum = taxNum;
    }
}
