package entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "questions")
public class Question {
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "label")
    private String label;
    @Column(name = "type")
    private Type type;
    @Column(name = "required")
    private boolean required;
    @Column(name = "active")
    private boolean active;
    @Column(name = "idAdmin")
    private int idAdmin;


    public void setIdAdmin(int idAdmin) {
        this.idAdmin = idAdmin;

    }


    public void setId(int id) {
        this.id = id;

    }

    public void setLabel(String label) {
        this.label = label;
    }

    public void setType(Type type) {
        this.type = type;

    }

    public void setRequired(boolean required) {
        this.required = required;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Question question = (Question) o;
        return id == question.id;
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, label, type, required, active);
    }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", label='" + label + '\'' +
                ", type=" + type +
                ", required=" + required +
                ", active=" + active +
                '}';
    }

    public int getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public Type getType() {
        return type;
    }

    public boolean isRequired() {
        return required;
    }

    public boolean isActive() {
        return active;
    }

    public int getIdAdmin() {
        return idAdmin;
    }
}
