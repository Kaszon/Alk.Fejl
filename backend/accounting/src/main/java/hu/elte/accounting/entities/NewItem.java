package hu.elte.accounting.entities;

import java.sql.Date;
import java.util.List;

import lombok.Getter;

@Getter
public class NewItem {
    private String actorEmail;
    private String partnerName;
    private Integer amount;
    private Date dateOfDeadline;
    private Date dateOfCompletion;
    private List<Category> categories;
    private String description;
}
