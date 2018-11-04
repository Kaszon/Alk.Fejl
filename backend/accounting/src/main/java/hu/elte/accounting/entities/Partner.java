package hu.elte.accounting.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Partner implements Serializable {

    private static final long serialVersionUID = -8550025099291657940L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "VARCHAR2(60) NOT NULL")
    private String name;

    @Column(columnDefinition = "VARCHAR2(60) NOT NULL")
    private String city;

    @Column(columnDefinition = "VARCHAR2(60) NOT NULL")
    private String address;

    @Column(columnDefinition = "VARCHAR2(11) NOT NULL")
    private String taxNum;
    
    @OneToMany(mappedBy = "partner")
    @JsonIgnore
    private List<Item> items;
}
