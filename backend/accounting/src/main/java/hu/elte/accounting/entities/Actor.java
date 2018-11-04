package hu.elte.accounting.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class Actor implements Serializable {
    private static final long serialVersionUID = 8021684570964001694L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "VARCHAR2(30) NOT NULL")
    private String firstName;

    @Column(columnDefinition = "VARCHAR2(30) NOT NULL")
    private String lastName;

    @Column(columnDefinition = "VARCHAR2(60) NOT NULL")
    private String password;

    @Column(unique = true, columnDefinition = "VARCHAR2(50) NOT NULL")
    private String email;

    @Column
    @Min(0)
    private Integer balance;   
}
