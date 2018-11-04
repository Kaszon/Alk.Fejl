package hu.elte.accounting.entities;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Min;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Item implements Serializable {

    private static final long serialVersionUID = -3192839156103935927L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JoinColumn
    @ManyToOne
    private Actor actor; 

    @JoinColumn
    @ManyToOne
    private Partner partner;

    @ManyToMany
    @JoinTable
    private List<Category> categories;    

    @Column
    @Min(0)
    private Integer amount;

    @Column
    private Date dateOfDeadline;

    @Column
    private Date dateOfCompletion;

    @Column(columnDefinition = "VARCHAR2(50) NOT NULL")
    private String description;
}
