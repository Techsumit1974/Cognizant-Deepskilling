package com.cognizant.springlearn;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {
    private static final Logger LOGGER=LoggerFactory.getLogger(SpringLearnApplication.class);
    public static void main(String[] args) throws Exception{
        SpringApplication.run(SpringLearnApplication.class,args);
        SpringLearnApplication a=new SpringLearnApplication();
        a.displayDate();
        a.displayCountry();
        a.displayCountries();
    }
    public void displayDate() throws Exception{
        LOGGER.info("START");
        ApplicationContext context=new ClassPathXmlApplicationContext("date-format.xml");
        SimpleDateFormat f=context.getBean("dateFormat",SimpleDateFormat.class);
        Date d=f.parse("31/12/2018");
        LOGGER.debug("{}",d);
        LOGGER.info("END");
    }
    public void displayCountry(){
        LOGGER.info("START");
        ApplicationContext c=new ClassPathXmlApplicationContext("country.xml");
        Country one=c.getBean("country",Country.class);
        Country two=c.getBean("country",Country.class);
        LOGGER.debug("Country : {}",one);
        LOGGER.debug("Another : {}",two);
        LOGGER.info("END");
    }
    @SuppressWarnings("unchecked")
    public void displayCountries(){
        LOGGER.info("START");
        ApplicationContext c=new ClassPathXmlApplicationContext("country.xml");
        List<Country> list=(List<Country>)c.getBean("countryList");
        LOGGER.debug("Countries : {}",list);
        LOGGER.info("END");
    }
}
