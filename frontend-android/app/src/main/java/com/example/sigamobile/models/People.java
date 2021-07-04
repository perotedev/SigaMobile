package com.example.sigamobile.models;

import java.text.SimpleDateFormat;

public class People {
    private String name, mom, rg, cpf, estCivil, naturalness, race, rh_factor, email;
    private SimpleDateFormat birth;
    private Boolean gender;

    public String getName() {
        return name;
    }

    public String getMom() {
        return mom;
    }

    public String getRg() {
        return rg;
    }

    public String getCpf() {
        return cpf;
    }

    public String getEstCivil() {
        return estCivil;
    }

    public String getNaturalness() {
        return naturalness;
    }

    public String getRace() {
        return race;
    }

    public String getRh_factor() {
        return rh_factor;
    }

    public String getEmail() {
        return email;
    }

    public SimpleDateFormat getBirth() {
        return birth;
    }

    public Boolean getGender() {
        return gender;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMom(String mom) {
        this.mom = mom;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setEstCivil(String estCivil) {
        this.estCivil = estCivil;
    }

    public void setNaturalness(String naturalness) {
        this.naturalness = naturalness;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public void setRh_factor(String rh_factor) {
        this.rh_factor = rh_factor;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBirth(SimpleDateFormat birth) {
        this.birth = birth;
    }

    public void setGender(Boolean gender) {
        this.gender = gender;
    }
}
