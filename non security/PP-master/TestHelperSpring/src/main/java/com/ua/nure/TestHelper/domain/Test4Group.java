package com.ua.nure.TestHelper.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Table(name = "test4groups")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@IdClass(Test4Group.class)
public class Test4Group implements Serializable{

    @Id
    @Column(name = "id_test")
    @NotNull
    private int idTest;

    @Id
    @NotNull
    @Column(name = "id_group")
    private String idGroup;

    public int getIdTest() {
        return idTest;
    }

    public void setIdTest(int idTest) {
        this.idTest = idTest;
    }

    public String getIdGroup() {
        return idGroup;
    }

    public void setIdGroup(String idGroup) {
        this.idGroup = idGroup;
    }
}
