package com.cognizant.springlearn.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;

@RestController
public class CountryController{
 @Autowired CountryService service;
 @RequestMapping("/country")
 public Country getCountryIndia(){ return service.getCountry("IN"); }
 @GetMapping("/countries")
 public List<Country> getAllCountries(){ return service.getAllCountries(); }
 @GetMapping("/countries/{code}")
 public Country getCountry(@PathVariable String code){ return service.getCountry(code); }
}
