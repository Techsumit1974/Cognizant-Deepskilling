package com.cognizant.springlearn.service;
import java.util.*;
import org.springframework.stereotype.Service;
import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.exception.CountryNotFoundException;
@Service
public class CountryService{
 private List<Country> countries=Arrays.asList(
  new Country("IN","India"),
  new Country("US","United States"),
  new Country("JP","Japan"),
  new Country("DE","Germany"));
 public List<Country> getAllCountries(){return countries;}
 public Country getCountry(String code){
   return countries.stream().filter(c->c.getCode().equalsIgnoreCase(code))
    .findFirst().orElseThrow(CountryNotFoundException::new);
 }
}
