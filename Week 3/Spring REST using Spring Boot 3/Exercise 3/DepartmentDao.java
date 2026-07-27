package com.cognizant.springlearn.dao;
import com.cognizant.springlearn.model.Department;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public class DepartmentDao{
 private static List<Department> DEPARTMENT_LIST=new ArrayList<>();
 public List<Department> getAllDepartments(){ return DEPARTMENT_LIST; }
}
