package com.cognizant.springlearn.dao;
import com.cognizant.springlearn.model.Employee;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public class EmployeeDao{
 private static List<Employee> EMPLOYEE_LIST=new ArrayList<>();
 public List<Employee> getAllEmployees(){ return EMPLOYEE_LIST; }
}
