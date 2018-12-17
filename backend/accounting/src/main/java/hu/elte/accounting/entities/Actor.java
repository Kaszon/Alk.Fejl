package hu.elte.accounting.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
public class Actor implements Serializable {
    private static final long serialVersionUID = 8021684570964001694L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "VARCHAR2(30) NOT NULL")
    private String firstName;

    @Column(columnDefinition = "VARCHAR2(30) NOT NULL")
    private String lastName;

    @Column(columnDefinition = "VARCHAR2(60) NOT NULL")
    private String password;

    @Column(unique = true, columnDefinition = "VARCHAR2(50) NOT NULL")
    private String email;

    @Column
    private Integer balance;

    @Column
    @Enumerated(EnumType.STRING)
    private Role role;

    public enum Role {
        ROLE_USER, ROLE_ADMIN
    }

    @OneToMany(mappedBy = "actor")
    @JsonIgnore
    private List<Item> items;
    
    public void updateBalance(Integer amount) {
        this.balance += amount;
    }
}
